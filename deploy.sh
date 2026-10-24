#!/usr/bin/env bash
set -e

# ==============================================================================
# StudyHub Deployment Script for VPS (arul.cc.cd / 100.121.100.102)
# ==============================================================================

VPS_HOST="root@100.121.100.102"
REMOTE_DIR="/var/www/studyhub"
SERVICE_NAME="studyhub.service"

echo ">>> [1/4] Building Vite React frontend production bundle..."
cd client
npm run build
cd ..

echo ">>> [2/4] Syncing application files to VPS ($VPS_HOST:$REMOTE_DIR)..."
ssh $VPS_HOST "mkdir -p $REMOTE_DIR $REMOTE_DIR/server/storage/materials"

rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude 'client/node_modules' \
  --exclude '.git' \
  package.json package-lock.json \
  server \
  scripts \
  client/dist \
  $VPS_HOST:$REMOTE_DIR/

echo ">>> [3/4] Installing production dependencies and syncing database on VPS..."
ssh $VPS_HOST "bash -s" << 'EOF'
  cd /var/www/studyhub
  npm install --omit=dev
  node server/db/seeders.js

  # Setup systemd service if not present
  cat << 'SERVICE_EOF' > /etc/systemd/system/studyhub.service
[Unit]
Description=StudyHub UTS Portal Express Server
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/studyhub
ExecStart=/usr/bin/node /var/www/studyhub/server/server.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
SERVICE_EOF

  systemctl daemon-reload
  systemctl enable studyhub.service
  systemctl restart studyhub.service
EOF

echo ">>> [4/4] Verifying Nginx & service status..."
ssh $VPS_HOST "systemctl status studyhub.service --no-pager"

echo "=============================================================================="
echo " StudyHub deployed successfully to https://arul.cc.cd"
echo "=============================================================================="

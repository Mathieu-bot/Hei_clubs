#!/bin/bash
cd "$(dirname "$0")"
nohup http-server -p 8000 &
sleep 2
xdg-open http://localhost:8000 || open http://localhost:8000


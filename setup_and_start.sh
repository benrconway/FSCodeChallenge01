#!/bin/bash
# Installs all dependencies and then starts up the whole project
npm install && cd frontend && npm install && cd ../backend && npm install && cd .. && npm start
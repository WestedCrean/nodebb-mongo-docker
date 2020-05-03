#!/usr/bin/env bash
echo "Creating mongo users..."
mongo admin --host localhost -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.createUser({user: 'nodebb-pl', pwd: '$NODEBB_PL_PASS', roles: [{role: 'readWrite', db: 'nodebb-pl'}]}); db.createUser({user: 'nodebb-en', pwd: '${NODEBB_EN_PASS}', roles: [{role: 'readWrite', db: 'nodebb-en'}]}); db.createUser({user: 'nodebb-private', pwd: '${NODEBB_PRIVATE_PASS}', roles: [{role: 'readWrite', db: 'nodebb-private'}]});"
echo "Mongo users created."
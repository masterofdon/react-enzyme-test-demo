#!/bin/bash

attempt=0
while [ $attempt -le 590 ]; do
    attempt=$(( $attempt + 1 ))
    echo "Waiting for CouchDB to be up (attempt: $attempt)..."
    curl http://127.0.0.1:5984 > couch-status.json
    rc=$?
    if [[ $rc = 0 ]] ; then
      echo "CouchDB is up!"
      cat couch-status.json
      exit 0
    fi
    sleep 2
done
exit 1

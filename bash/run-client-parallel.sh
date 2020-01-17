#!/bin/bash
# Our custom function
cust_func() {
  PATH="./data/client_$1.txt"
  echo "Do exchange $PATH ..."
  /usr/local/bin/node ./node_modules/.bin/ts-node ./client/index.ts --path=$PATH
}
# For loop 5 times
for i in $(seq 0 4); do
  cust_func $i &
done

wait
echo "Exchange is complete"

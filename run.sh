#/bin/sh
echo "Running all modules..."
(cd module4 && npm start) & (cd q-and-a && npm start) & (cd page-container && npm start)
echo "done!"

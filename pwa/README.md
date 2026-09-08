
## serwist

## start flow
rm -rf .next public/sw.js public/sw.js.map
npm run build
npm start
Update on reload

## Docker
# rebuild image
docker build -t student-pwa:local .

# run app
docker run --rm -p 3000:3000 --name student-pwa student-pwa:local

## Install dependencies

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

## Docker

Build image 

```sh
docker image build --network host -f Dockerfile -t styliff 
```

Run the project with docker 

```sh
docker run -t --name styliff --network host -p 3000:3000 styliff
```

Stop container

```sh
docker stop styliff
```

## Write First App 
### Hyperledger Fabric

# Criptografía - Proyecto Extra "Write First App - Hyperledger Fabric" 🚀
* Universidad Nacional Autónoma de México
* Criptografía - Grupo 2 — Semestre 2023-1

## Descripción 
El proyecto está basado en la [siguiente documentación](https://hyperledger-fabric.readthedocs.io/en/release-2.2/write_first_app.html) y se ha agregado una interfaz gráfica. 

## Getting started
1. Preparar el entorno de desarrollo como lo explica Hyperledger Fabric en su [documentación] (https://hyperledger-fabric.readthedocs.io/en/release-2.2/getting_started.html) 
2. Este repositorio ya incluye el (repositorio Fabric-Samples)[https://github.com/hyperledger/fabric-samples] más cambios para interfaz gráfica
3. Levantar la blockchain network 
    1) Navegar a test-network
    ~~~
    cd fabric-samples/test-network
    ~~~
    2) Correr el sig script
    ~~~
    ./network.sh up createChannel -c mychannel -ca
    ~~~
    3) Correr el sig script 
    ~~~
    ./network.sh deployCC -ccn basic -ccp ../asset-transfer-basic/chaincode-javascript/ -ccl javascript
    ~~~
Con esto nuestra blockchain network se ha levantado, para más detalles de funcionamiento en la [documentación](https://hyperledger-fabric.readthedocs.io/en/release-2.2/write_first_app.html)


4. Levantar nuestra aplicación
    1) Navegar a application-javascript
    ~~~
    cd asset-transfer-basic/application-javascript
    ~~~
    2) Instalar dependencias
    ~~~
    npm install
    ~~~
    3) Correr la aplicación 
    ~~~
    node app.js
    ~~~
5) Levantar interfaz gráfica 
    1) En un navegador, buscar lo siguiente:
    ~~~
    http://localhost:8080/
    ~~

6) Listo! 
Para más detalles de funcionamiento en la [documentación](https://hyperledger-fabric.readthedocs.io/en/release-2.2/write_first_app.html)

## Autores ✒️
* **Durán González Lizeth** 💻  
* **López Sosa Nelly Paola** 💻 
* **Nava Rosales Juan Manuel** 💻  

# Angular DApp Wallet

Aplicación Web desarrollada con Angular que permite conectar una billetera MetaMask, visualizar la dirección y saldo en ETH, y consultar transacciones en la blockchain de Ethereum a través de Etherscan.

## 🎯 Propósito

Ofrecer una interfaz sencilla para que los usuarios puedan:
- Conectar su billetera MetaMask.
- Ver su dirección pública y el saldo en ETH.
- Consultar el historial de transacciones de una cuenta usando la API de Etherscan.

## ⚙️ Características

- Conexión segura con MetaMask.
- Detección automática del proveedor Web3.
- Consulta de saldo en tiempo real desde Ethereum.
- Peticiones a la API de Etherscan para mostrar historial de transacciones.
- Estilo visual simple pero responsive y funcional.

## 📋 Requisitos Maestros

- Tener instalado **MetaMask**.
- Conexión a internet.
- Cuenta de **Etherscan** con una API Key.
- Navegador moderno (Chrome, Firefox).

## ✅ Requisitos Funcionales

- RF01: El usuario debe poder conectar su billetera.
- RF02: El sistema debe mostrar la dirección y saldo.
- RF03: El sistema debe permitir consultar transacciones usando Etherscan.
- RF04: Debe alertar si MetaMask no está instalado.

## 🛠️ Requisitos Técnicos

- Angular 16+
- TypeScript
- Bootstrap o Angular Material (opcional)
- Web3.js
- API Key de Etherscan
- Node.js 18+
- npm

## 🧱 Estructura del Frontend

- `app.component.html`: Cabecera de navegación y plantilla principal.
- `wallet.component.ts`: Lógica para conectar MetaMask, mostrar dirección y saldo.
- `etherscan.service.ts`: Servicio que consume la API de Etherscan.
- `web3.service.ts`: Servicio centralizado para manejar la conexión con Web3 y MetaMask.

## 🔗 Conexión con la Blockchain

- Utiliza Web3.js para conectarse a Ethereum a través de MetaMask.
- Extrae el saldo mediante `eth_getBalance`.
- Llama a la API REST pública de [Etherscan](https://etherscan.io/apis) para consultar transacciones.

## 🚀 Cómo ejecutar el proyecto

```bash
git clone https://github.com/Patumak47/angular-dapp-wallet.git
cd angular-dapp-wallet
npm install
ng serve
```

Luego abre tu navegador en `http://localhost:4200`.

## 📦 Repositorio GitHub

[https://github.com/Patumak47/angular-dapp-wallet](https://github.com/Patumak47/angular-dapp-wallet)
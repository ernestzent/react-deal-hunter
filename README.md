# Gaming Deal & Wishlist Budget Tracker (Deal Hunter) 🎮

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

¡Hola! 👋 **Deal Hunter** es una aplicación web interactiva diseñada para rastrear ofertas de videojuegos en tiempo real mediante la **API de CheapShark**, gestionar una lista de deseos (*wishlist*) personalizada y controlar la asignación de presupuesto sin exceder tu límite de gasto.

🔗 **Demo en vivo:** [Ver Deal Hunter desplegado](https://dealhunterebac.netlify.app/)

## ✨ Características Principales

* **Búsqueda de Ofertas con API Real y Debounce:** Consumo de ofertas de videojuegos a través de `cheapSharkApi.js`, optimizado con el hook personalizado `useDebounce` para reducir peticiones innecesarias al escribir en la barra de búsqueda.
* **Control de Presupuesto en Tiempo Real:** Cálculo automático de saldo disponible, gasto acumulado y alertas de presupuesto respaldado por las utilidades de `budgetHelpers.js`.
* **Estado Global Modular:** Manejo centralizado de ofertas y lista de deseos mediante `dealsSlice.js` y `wishlistSlice.js` en Redux Toolkit.
* **Navegación Multipágina:** Vistas dedicadas para el catálogo principal (`HomePage`), detalle de cada juego (`GameDetailPage`) y gestión de lista de deseos (`WishlistPage`) con React Router.
* **Arquitectura de Estilos Desacoplada:** Estilos globales (`GlobalStyles.js`), tema centralizado (`theme.js`) y archivos `.styles.js` independientes para cada componente y página.
* **Pruebas Unitarias Completas en Jest:** Suites dedicadas para helpers de presupuesto, componentes, slices de Redux y el hook `useDebounce`.

## 🛠️ Tecnologías Utilizadas

* **React & JavaScript (ES6+):** Componentes funcionales y hooks personalizados (`useDebounce`).
* **Redux Toolkit:** Administración del estado global (`store.js`, `dealsSlice.js`, `wishlistSlice.js`).
* **React Router:** Enrutamiento del lado del cliente entre inicio, detalle de juego y wishlist.
* **Styled-Components:** Estilizado modular por componente con soporte de tema global.
* **CheapShark API:** Fuente de datos en tiempo real de descuentos de videojuegos.
* **Jest & React Testing Library:** Pruebas unitarias de lógica, hooks, estado y componentes.

## 📂 Estructura del Proyecto

```text
react-deal-hunter/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── __tests__/
│   │   ├── budgetHelpers.test.js   # Pruebas de cálculo de presupuesto
│   │   ├── components.test.jsx     # Pruebas de renderizado e interacción de componentes
│   │   ├── reduxSlices.test.js     # Pruebas de reducers y acciones de Redux Toolkit
│   │   └── useDebounce.test.js     # Pruebas del hook personalizado useDebounce
│   ├── api/
│   │   └── cheapSharkApi.js        # Cliente y consumo de la API de CheapShark
│   ├── components/
│   │   ├── DealCard/
│   │   │   ├── DealCard.jsx
│   │   │   └── DealCard.styles.js
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.styles.js
│   │   └── SearchBar/
│   │       ├── SearchBar.jsx
│   │       └── SearchBar.styles.js
│   ├── hooks/
│   │   └── useDebounce.js          # Hook para retrasar búsquedas en tiempo real
│   ├── pages/
│   │   ├── GameDetailPage/
│   │   │   ├── GameDetailPage.jsx
│   │   │   └── GameDetailPage.styles.js
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx
│   │   │   └── HomePage.styles.js
│   │   └── WishlistPage/
│   │       ├── WishlistPage.jsx
│   │       └── WishlistPage.styles.js
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── dealsSlice.js
│   │   │   └── wishlistSlice.js
│   │   └── store.js
│   ├── styles/
│   │   ├── GlobalStyles.js
│   │   └── theme.js
│   ├── utils/
│   │   └── budgetHelpers.js        # Funciones auxiliares de presupuesto y totales
│   ├── App.js
│   └── index.js
├── .gitignore
├── README.md
├── package-lock.json
└── package.json
```

## 🚀 Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/ernestzent/react-deal-hunter.git
   cd react-deal-hunter
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

4. **Ejecuta todas las pruebas unitarias:**
   ```bash
   npm test
   ```

5. **Genera el build de producción:**
   ```bash
   npm run build
   ```

## 💡 Ejemplos de Uso

1. **Explorar y Buscar Ofertas:** En `HomePage`, utiliza la barra `SearchBar` para buscar cualquier título; `useDebounce` esperará unos milisegundos tras dejar de escribir antes de consultar `cheapSharkApi.js`.
2. **Consultar Detalles:** Haz clic en cualquier `DealCard` para abrir `GameDetailPage` y revisar el precio original, descuento y detalles del juego.
3. **Administrar Presupuesto y Wishlist:** Agrega tus juegos favoritos a la lista y entra a `WishlistPage` para definir tu límite de presupuesto y verificar el cálculo en tiempo real gestionado por `wishlistSlice.js` y `budgetHelpers.js`.

## 🤝 Contribuciones

Las contribuciones, reportes de errores y mejoras son bienvenidas:
1. Haz un *Fork* del repositorio.
2. Crea tu rama (`git checkout -b feature/filtro-tiendas`).
3. Guarda tus cambios (`git commit -m 'Agrega filtro por tienda digital'`).
4. Sube tu rama (`git push origin feature/filtro-tiendas`).
5. Abre un *Pull Request* asegurándote de que pasen las 4 suites de pruebas en `src/__tests__/`.

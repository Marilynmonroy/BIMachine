# BiMachine - Landing Page de Captación de Clientes

Este proyecto es una landing page diseñada para la captación de clientes de BiMachine, una empresa especializada en el análisis de datos para diversas empresas en Brasil.

## Tecnologías Utilizadas

- **TypeScript**: Para un desarrollo robusto y con tipado seguro.
- **PostgreSQL**: Base de datos utilizada para almacenar la información de los clientes.
- **Docker**: Para la contenedorización y fácil despliegue del entorno.
- **React**: Framework de desarrollo de la interfaz de usuario.
- **Node.js**: Backend para la gestión de datos y lógica del negocio.
- **Tailwind CSS**: Para el diseño estilizado y responsive de la interfaz.

## Instalación y Ejecución

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/tu_usuario/bi-machine-landing.git
   cd bi-machine-landing
   ```

2. Instalar dependencias:

   ```sh
   npm install
   ```

3. Configurar variables de entorno: Crear un archivo `.env` en la raíz del proyecto y agregar:

   ```env
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/bi_machine_db
   ```

4. Levantar el entorno de desarrollo:

   ```sh
   npm run dev
   ```

5. Para ejecutar con Docker:

   ```sh
   docker-compose up --build
   ```

## Despliegue

Para desplegar en producción, se recomienda utilizar plataformas como Vercel, Netlify o un servidor propio con Docker.

## Contribución

Si deseas contribuir, por favor realiza un fork del repositorio y envía un Pull Request con tus mejoras.

## Licencia

Este proyecto está bajo la licencia MIT. Siente la libertad de usarlo y modificarlo según sea necesario.

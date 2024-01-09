const bootcamps = ["Cybersecurity", "Data Science", "Full-Stack", "UX/UI"];

const cyberTypes = ["Network Security", "Cloud Security", "Physical Security"];

const dataTypes = [
  "Data Analisys",
  "Data Visualization",
  "Machine Learning",
  "Predictive Model",
  "Programming",
];

const fullTypes = ["Front-End", "Back-End", "Full-Stack"];

const uxTypes = ["Portfolio", "Research", "App Design"];

const feedQueries = {
  usersTable: `
      CREATE TABLE users (
          user_id varchar(100) NOT NULL PRIMARY KEY, 
          email varchar(45) NOT NULL UNIQUE,
          photo varchar(100),
          firstname varchar(45), 
          lastname varchar(100),
          bootcamp varchar(45),
          curse varchar(45),
          github varchar(45)
      )`,
  projectsTable: `
      CREATE TABLE projects (
          project_id serial NOT NULL PRIMARY KEY,
          user_id varchar(100),
          title varchar(100) NOT NULL,
          date varchar(45) NOT NULL,
          type varchar(45) NOT NULL,
          description text NOT NULL,
          achievement_one text NOT NULL,
          achievement_two text NOT NULL,
          achievement_three text NOT NULL,
          finished boolean NOT NULL,
          pending_one text,
          pending_two text,
          pending_three text,
          img_small varchar(200),
          img_big varchar(200) NOT NULL,
          github varchar(200) NOT NULL,
          site varchar(200),
          FOREIGN KEY (user_id) REFERENCES users(user_id)
          ON DELETE CASCADE
      )`,
  commentsTable: `
        CREATE TABLE comments (
            comment_id serial NOT NULL PRIMARY KEY,
            user_id varchar(100),
            project_id int,
            text text NOT NULL,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(user_id),
            FOREIGN KEY (project_id) REFERENCES projects(project_id)
            ON DELETE CASCADE
        )`,
  likesTable: `
        CREATE TABLE likes (
            user_id varchar(100) NOT NULL,
            project_id int NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(user_id),
            FOREIGN KEY (project_id) REFERENCES projects(project_id)
            ON DELETE CASCADE
        )`,
  insertUsers: `
        INSERT INTO users(
        user_id, email, photo, firstname, lastname, bootcamp, curse, github)
        VALUES 	
            -- 1
            ('becabecks3@gmail.com', 'becabecks3@gmail.com',
            'https://avatars.githubusercontent.com/u/101715001?v=4',
            'Rebeca', 'Arrogante', 'Full-Stack', '23-04', 'https://github.com/becabecks3'),
            -- 2
            ('santivediap@gmail.com', 'santivediap@gmail.com',
            'https://avatars.githubusercontent.com/u/130933779?v=4',
            'Santiago', 'Vedia', 'Full-Stack', '23-04', 'https://github.com/santivediap'),
            -- 3
            ('github|75849528', 'elcastravete@gmail.com',
            'https://avatars.githubusercontent.com/u/75849528?v=4',
            'Victor', 'Outeiro', 'Full-Stack', '23-04', 'https://github.com/Radu-A'),
            -- 4
            ('google-oauth2|100918985305882154445', 'judith@gmail.com',
            'https://avatars.githubusercontent.com/u/130986127?v=4',
            'Judith', 'Roca', 'Data Science', '23-04', 'https://github.com/JuditRoca'),
            -- 5
            ('saana.toivonen@example.com', 'saana.toivonen@example.com',
            'https://randomuser.me/api/portraits/women/77.jpg', 
            'Saana', 'Toivonen', 'Cybersecurity', '22-09', 'https://github.com/Saana'),
            -- 6
            ('debra.rodriquez@example.com', 'debra.rodriquez@example.com',
            'https://randomuser.me/api/portraits/women/35.jpg', 
            'Debra', 'Rodriquez', 'UX/UI', '22-09', 'https://github.com/Debra'),
            -- 7
            ('auth0|6593f4e20890c870388dc80a', 'aaron.toivonen@example.com',
            'https://randomuser.me/api/portraits/men/70.jpg', 
            'Aaron', 'Fetcher', 'Full-Stack', '23-01', 'https://github.com/Aaron'),
            -- 8
            ('sandrine.toivonen@example.com', 'sandrine.toivonen@example.com',
            'https://randomuser.me/api/portraits/women/50.jpg', 
            'Sandrine', 'Lambert', 'Data Science', '23-01', 'https://github.com/Sandrine'),
            -- 9
            ('michal.shutter@example.com', 'michal.shutter@example.com',
            'https://randomuser.me/api/portraits/men/36.jpg', 
            'Michal', 'Shutter', 'UX/UI', '23-01', 'https://github.com/Michal')`,
  insertProjects: `
        INSERT INTO public.projects(
            user_id, title, date, type, description, achievement_one, achievement_two, achievement_three, finished, pending_one, pending_two, pending_three, img_small, img_big, github, site)
            VALUES ('becabecks3@gmail.com', 'Gigs4You', '2023-06-25', 'Full-Stack',
            'Proyecto final donde se une lo aprendido tanto en Front como en Back. Gigs4You es una apliación web para buscar eventos musicales, tanto por género como por geolocalización.',
            -- achievements
            'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.',
            'Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.',
            'Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.',
            -- finished
            'false',
            -- pending
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.',
            'Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.',
            'Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
            'https://github.com/becabecks3/Final-Project-Full-Stack/raw/main/Client/src/assets/screenshots/home.png',
            'https://github.com/becabecks3/Final-Project-Full-Stack/raw/main/Client/src/assets/screenshots/mapa.png',
            'https://github.com/becabecks3/Final-Project-Full-Stack',
            'https://github.com/becabecks3/Final-Project-Full-Stack'
            ),
            ('becabecks3@gmail.com', 'Quizz-Project', '2023-05-15', 'Front-End',
            'This project aims to put into practice knowledge of HTML, CSS, and JavaScript. The JavaScript part, in particular, focuses on form validation, DOM manipulation, and executing user interactions.',
            -- achievements
            'Nullam hendrerit augue mollis sapien pretium, sit amet congue enim porttitor. Ut quis commodo est, in vestibulum ex. Aenean lobortis rutrum tellus sed porta. Vivamus nec iaculis orci, sed efficitur arcu.',
            'Morbi mollis sit amet elit ut venenatis. Nunc eget mauris lacus. Aenean sem erat, mattis at hendrerit in, bibendum auctor nulla. Etiam consequat leo vitae consequat tempor.',
            'Sed et nibh et metus viverra ornare. Integer vel vehicula massa.', 
            -- finished
            'false',
            -- pending
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.',
            'Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.',
            'Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
            'https://github.com/becabecks3/Quizz-Project/raw/main/assets/screenshots/captura2.png',
            'https://github.com/becabecks3/Quizz-Project/raw/main/assets/screenshots/captura8.png',
            'https://github.com/becabecks3/Quizz-Project',
            'https://github.com/becabecks3/Quizz-Project'
            ),
            ('santivediap@gmail.com', 'Findjobs', '2023-05-16', 'Back-End',
            'Esta es una aplicación web creada para aquellos que quieren encontrar su primer empleo en el mundo de la tecnología. Permite a los usuarios buscar a través de scrapin de dos páginas externas varios resultados acorde con su búsqueda con puesto de trabajo y provincia.',
            -- achievements
            'Operaciones CRUD en bases de datos SQL (información de usuarios y ofertas guardadas por usuario) y bases de datos NoSQL para las ofertas de empleo administradas por el administrador.',
            'Búsqueda y visualización de ofertas de empleo obtenidas mediante web scraping de dos sitios web diferentes, además de las ofertas de empleo creadas por el administrador y almacenadas en la base de datos de Atlas de MongoDB.',
            'Funcionalidad de registro, inicio de sesión y cierre de sesión para los usuarios, con uso de cookies y tokens, y rutas protegidas.',
            -- finished
            'false',
            -- pending
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.',
            'Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.',
            'Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
            'https://github.com/santivediap/backend-proyect-findjobs/raw/main/public/assets/Captura1.PNG',
            'https://github.com/santivediap/backend-proyect-findjobs/raw/main/public/assets/Signupcaptura.PNG',
            'https://github.com/santivediap/backend-proyect-findjobs',
            'https://github.com/santivediap/backend-proyect-findjobs'
            ),
            ('santivediap@gmail.com', 'Lodeur', '2023-07-22', 'Full-Stack',
            'Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
            -- achievements
            'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.',
            'Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.',
            'Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.',
            -- finished
            'false',
            -- pending
            'Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti.',
            'Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.',
            'Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.',
            'https://github.com/santivediap/Lodeur-ProyectoFinal/raw/develop/client/public/assets/Captura%20de%20pantalla%202023-07-17%20234254.png?raw=true',
            'https://github.com/santivediap/Lodeur-ProyectoFinal/raw/develop/client/public/assets/Captura%20de%20pantalla%202023-07-17%20234335.png?raw=true',
            'https://github.com/santivediap/Lodeur-ProyectoFinal',
            'https://lodeur.onrender.com/'
            ),
            ('github|75849528', 'Personal Web', '2023-03-23', 'Front-End',
            --description
            'Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
            -- achievements
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula. Nam nec massa egestas, tristique quam sit amet, maximus lacus.',
            'Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper. Aenean rutrum mauris nulla, sit amet finibus diam sagittis a.',
            'Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti. Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum.',
            -- finished
            'false',
            -- pending
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula. Nam nec massa egestas, tristique quam sit amet, maximus lacus.',
            'In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque.',
            'Nunc bibendum faucibus sem vitae aliquet. Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.',
            'https://github.com/Radu-A/personal-web/blob/master/assets/screenshots/screenshot-mobile-index.jpg?raw=true', 'https://github.com/Radu-A/personal-web/blob/master/assets/screenshots/screenshot-desktop-biography.jpg?raw=true',
            'https://github.com/Radu-A/web-personal', 'https://web-personal-omega.vercel.app/https://web-personal-omega.vercel.app/'),
            ('github|75849528', 'Homework', '2023-07-22', 'Full-Stack',
            'A place where the students of The Bridge can share their projects. Develop an entire web aplication with PostgreSQL, Node and React. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.',
            -- achievements
            'Construct the CRUD with Node and PostgreSQL. Routing with Node and Express',
            'Build the React components structure. Functionality with React states and lifecycle of their components. Implement Hooks to enlarge the potential of the App. Routing with React Router Dom',
            'Authentication with JWT and JS-Cookie. Session management using a token sent by a Express controller in the back and taked by Js-Cookie in the front.',
            -- finished
            'false',
            -- pending
            'Add a profile view where the user could change and update his/her data info',
            'Favorites function and Favorites view, section where you can see the projects you have saved and unmark them',
            'Comments functionlity. Inside the profile view, add a section where leave a message to give your opinion or a advice to complete the project',
            'https://github.com/Radu-A/homework/raw/develop/server/assets/screenshot-smartphone.jpg',
            'https://github.com/Radu-A/homework/raw/develop/server/assets/screenshot-desktop.jpg',
            'https://github.com/Radu-A/homework', 'https://homework-lg52.onrender.com/'
            ),
            ('saana.toivonen@example.com', 'Form Web', '2023-05-01', 'Cloud Security',
            'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed.',
            -- achievements
            'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.',
            'Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.',
            'Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.',
            -- finished
            'false',
            -- pending
            'Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti.',
            'Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.',
            'Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.',
            null, 'https://www.itarian.com/images/what-is-network-vulnerability-assessment.png', 
            'https://github.com/Radu-A/web-personal', null),
            ('debra.rodriquez@example.com', 'Portfolio', '2022-04-01', 'Portfolio',
            'Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
            -- achievements
            'Nunc lacinia dui sed ex molestie commodo. Nulla eu tellus justo. Etiam scelerisque nunc vitae velit ultrices, quis semper arcu tincidunt. Sed luctus dictum est maximus auctor.',
            'Ut pretium ullamcorper dictum. Aenean at urna nec tellus placerat condimentum vitae a ante. Sed quis maximus diam. Suspendisse vel mattis turpis. Nunc non urna sapien. Ut in leo varius, dignissim ex sit amet, egestas nunc.',
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sit amet semper justo.',
            -- finished
            'false',
            -- pending
            'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus.',
            'Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo.',
            'Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.', 
            null, 'https://assets.toptal.io/images?url=https%3A%2F%2Fuploads.toptal.io%2Fblog%2Fimage%2F124166%2Ftoptal-blog-image-1505220208739-0a55992fcc18eedf899a09481bfc28e6.jpg', 
            'https://github.com/Radu-A/web-personal', null),
            ('auth0|6593f4e20890c870388dc80a', 'Mongoose Api', '2023-03-25', 'Back-End',
            'Aplicación que permite al usuario realizar métodos GET y POST que aplican cambios sobre una base de datos MongoDB. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu.',
            -- achievements
            'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque. Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus.',
            'Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit. Aliquam sagittis mollis leo.',
            'Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.',
            -- finished
            'false',
            -- pending
            'Nullam hendrerit augue mollis sapien pretium, sit amet congue enim porttitor. Ut quis commodo est, in vestibulum ex. Aenean lobortis rutrum tellus sed porta.',
            'Vivamus nec iaculis orci, sed efficitur arcu. Morbi mollis sit amet elit ut venenatis. Nunc eget mauris lacus. Aenean sem erat, mattis at hendrerit in, bibendum auctor nulla.',
            'Etiam consequat leo vitae consequat tempor. Sed et nibh et metus viverra ornare. Integer vel vehicula massa.',
            null, 'https://i.ibb.co/VCb0P9G/biografia-big.jpg', 
            'https://github.com/Radu-A/ejercicio-api-mongoose', 'https://api-mongoose.onrender.com'),
            ('sandrine.toivonen@example.com', 'Form web', '2023-04-21', 'Machine Learning',
            'Nunc interdum eros neque, non feugiat ex consectetur sed. Nulla tincidunt eleifend nisi, id ultricies tortor. Mauris vel maximus sem. Etiam commodo urna fringilla tellus placerat molestie.',
            -- achievements
            'Nullam hendrerit augue mollis sapien pretium, sit amet congue enim porttitor. Ut quis commodo est, in vestibulum ex. Aenean lobortis rutrum tellus sed porta. Vivamus nec iaculis orci, sed efficitur arcu.',
            'Morbi mollis sit amet elit ut venenatis. Nunc eget mauris lacus. Aenean sem erat, mattis at hendrerit in, bibendum auctor nulla. Etiam consequat leo vitae consequat tempor.',
            'Sed et nibh et metus viverra ornare. Integer vel vehicula massa.',
            -- finished
            'false',
            -- pending
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.',
            'Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.',
            'Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
            null, 'https://github.com/maestre7/DataSciToolbox/raw/dev/documentation/logo_dstb.png',  
            'https://github.com/JuditRoca/DataSciToolbox', null),
            ('michal.shutter@example.com', 'Bussines Web', '2023-03-19', 'Research',
            'Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Etiam commodo urna fringilla tellus placerat molestie.',
            -- achievements
            'Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.',
            'Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.',
            'Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.',
            -- finished
            'false',
            -- pending
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus maximus pharetra lectus vitae vehicula.',
            'Nam nec massa egestas, tristique quam sit amet, maximus lacus. Nunc dignissim quam urna, fringilla pellentesque nunc porta eu. Quisque mollis nec dolor quis ullamcorper.',
            'Aenean rutrum mauris nulla, sit amet finibus diam sagittis a. Nunc at est id nisl imperdiet pulvinar. Donec pulvinar sit amet turpis ac posuere.',
            null, 'https://assets.toptal.io/images?url=https%3A%2F%2Fuploads.toptal.io%2Fblog%2Fimage%2F124169%2Ftoptal-blog-image-1505220368042-4f0d14501d63f647f7d55881746d1418.png', 
            'https://github.com/Radu-A/web-personal', null),
            ('google-oauth2|100918985305882154445', 'Hundir la flota', '2023-04-25', 'Programming',
            'Este proyecto contiene el código del primer juego que desarrollé en Python. Se trata de una versión simplificada del clásico juego de mesa Hundir la Flota. El objetivo del juego es hundir todos los barcos del oponente antes de que él hunda los tuyos.',
            -- achievements
            'Funciones.py: En este archivo se encuentran las funciones necesarias para el funcionamiento del juego. Estas funciones incluyen, por ejemplo, la generación de coordenadas aleatorias para ubicar los barcos, los cálculos de disparos y la manipulación de los tableros.',
            'Clases.py: En este archivo se definen las clases utilizadas en el juego. Puedes encontrar la definición de la clase Barco, por ejemplo, que puede personalizarse para ajustar el tamaño y otros atributos de los barcos en el juego.',
            'Variables.py: En este archivo se encuentran las variables del juego que se utilizan en diferentes partes del código. Aquí es donde puedes personalizar aspectos como el tamaño del tablero, la cantidad de barcos o cualquier otra variable relacionada con el juego. Al modificar estas variables en variables.py, puedes ajustar y personalizar las características del juego según tus preferencias.',
            'true',
            -- pending
            null,
            null,
            null,
            null, 'https://github.com/JuditRoca/Hundir-la-flota/raw/master/src/HUNDIR%20LA%20FLOTA.png',
            'https://github.com/JuditRoca/Hundir-la-flota', null
            ),
            ('google-oauth2|100918985305882154445', 'Carnic Impact', '2023-07-25', 'Data Analysis',
            'Mediante técnicas estadísticas y visualización de datos, se busca comprender el impacto ambiental de estas actividades y contrastar las emisiones generadas por la industria cárnica con las asociadas a la agricultura. El objetivo es destacar la importancia de considerar alternativas sostenibles.',
            -- achievements
            'En el notebook "bovine", se lleva a cabo el procesamiento de los datos relacionados con la población bovina. Aquí se realizan las tareas de limpieza y transformación de los datos, así como la generación de gráficos descriptivos. Este notebook se enfoca específicamente en analizar la población bovina y su relación con las emisiones.',
            'En el notebook "emisiones_car_agri", se realiza el procesamiento de los datos relacionados con las emisiones de la industria cárnica y la agricultura. Aquí se llevan a cabo las tareas de limpieza de los data frames correspondientes a las emisiones, así como la generación de gráficos para visualizar los resultados. Este notebook se centra en el análisis de las emisiones de estos sectores específicos.',
            'Memoria.ipynb: Este notebook es el principal y contiene toda la documentación y explicación detallada del proceso de EDA (Análisis Exploratorio de Datos), así como las conclusiones obtenidas del estudio. Se describen paso a paso las etapas del análisis, desde la carga de los datos hasta las técnicas estadísticas utilizadas y la creación de los gráficos relevantes. Además, se presentan los hallazgos y patrones observados durante el estudio, así como las conclusiones derivadas de los resultados obtenidos.',
            'true',
            -- pending
            null,
            null,
            null,
            null, 'https://github.com/JuditRoca/Hundir-la-flota/raw/master/src/HUNDIR%20LA%20FLOTA.png',
            'https://github.com/JuditRoca/Hundir-la-flota', null
            )`,
  insertComments: `
        INSERT INTO comments(user_id, project_id, text) VALUES (
            'github|75849528', 1, 'No hay nada que pueda comentar porque tu proyecto es una puta mierda. Intentaría ayudarte pero ni puedo, ni quiero'),
            ('github|75849528', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae lacus ornare, porttitor urna sed, posuere ante. Mauris ipsum purus, venenatis cursus mauris at, maximus malesuada massa. Nulla tempor felis quis libero venenatis, ut consectetur mauris tristique. Fusce sodales mi at arcu tristique volutpat. Mauris fringilla neque id consequat aliquet. Nunc non gravida dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec in semper lorem. Vivamus rhoncus sodales auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.'),
            ('auth0|64de6eb7bbb0077ec394963e', 6, 'Nullam urna magna, pellentesque nec lorem at, cursus dictum ipsum. Aliquam erat volutpat. In consequat justo eu urna convallis hendrerit. Suspendisse nec venenatis tellus. Integer egestas odio mauris, et fermentum sem porta eu. Aliquam tristique nisi fermentum consectetur volutpat. Integer accumsan mauris sit amet aliquet imperdiet. Proin finibus, lacus eu sagittis vestibulum, est ante accumsan purus, eu imperdiet ex elit sit amet ante. In et nisl ut nisl lobortis ullamcorper.'),
            ('santivediap@gmail.com', 5, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean quis ultrices orci, sit amet dignissim tellus. Fusce mauris augue, elementum in pulvinar vitae, dapibus vel magna. In vel pulvinar purus. Integer quis nisl massa. Nam bibendum laoreet ante, nec ultrices nulla molestie eu. Suspendisse vel eleifend libero. Donec at sapien ligula. Ut ut iaculis lorem. Curabitur sit amet mauris venenatis libero tempor aliquam a in nisl. Sed magna sem, vestibulum eget urna sodales, fermentum tempor ante. Pellentesque blandit lectus libero, sit amet posuere elit laoreet eu. Nam justo nisl, porttitor ut justo et, sagittis venenatis tortor. Phasellus vitae elit massa. Aliquam et magna tincidunt, maximus sem nec, egestas lorem. Phasellus ipsum felis, ultrices quis laoreet vel, convallis tempus lacus.'
            )`,
  insertLikes: `
        INSERT INTO likes (user_id, project_id)
            VALUES ('github|75849528', 1),
            ('github|75849528', 2),
            ('github|75849528', 3),
            ('github|75849528', 4),
            ('github|75849528', 5),
            ('github|75849528', 12),
            ('github|75849528', 13),
            ('auth0|64de6eb7bbb0077ec394963e', 3),
            ('auth0|64de6eb7bbb0077ec394963e', 4),
            ('auth0|64de6eb7bbb0077ec394963e', 5),
            ('auth0|64de6eb7bbb0077ec394963e', 6),
            ('auth0|64de6eb7bbb0077ec394963e', 7),
            ('auth0|64de6eb7bbb0077ec394963e', 12),
            ('auth0|64de6eb7bbb0077ec394963e', 13),
            ('santivediap@gmail.com', 1),
            ('santivediap@gmail.com', 2),
            ('santivediap@gmail.com', 5),
            ('santivediap@gmail.com', 6),
            ('santivediap@gmail.com', 8),
            ('santivediap@gmail.com', 12),
            ('santivediap@gmail.com', 13)`,
  dropUsersTable: `DROP TABLE users`,
  dropProjectsTable: `DROP TABLE projects`,
  dropCommentsTable: `DROP TABLE comments`,
  dropLikesTable: `DROP TABLE likes`,
};

module.exports = feedQueries;

https://chatgpt.com/share/6a96d29a-d474-83e9-b880-2ac42b0ecc47

Para este trabajo desarrollamos una aplicación web de Pokémon usando React. La aplicación permite ver información obtenida desde una API, buscar Pokémon y guardarlos como favoritos.

Usamos PokéAPI porque es gratuita, no necesita autenticación y tiene datos como nombre, imagen, tipo, altura y peso. Para hacer las consultas usamos Axios.

Organizamos el proyecto en distintos componentes y páginas para que el código sea más claro. También usamos useState para guardar los datos, el buscador, los favoritos, la carga y los errores. Con useEffect hacemos la consulta a la API cuando inicia la aplicación.

Para mostrar los Pokémon usamos .map() y para buscarlos usamos .filter(). Los favoritos se guardan en localStorage, por lo que siguen apareciendo aunque se recargue la página.

La inteligencia artificial nos ayudó a organizar el proyecto, crear una primera versión del código y entender algunas partes. Después fuimos revisando y adaptando el código para que fuera más simple y fácil de explicar.

Este trabajo nos ayudó a practicar React, componentes, props, estados, rutas, consumo de APIs y almacenamiento local.
# DeadAnts 🧺🐜

## Problema: Contando hormigas muertas

En un área de picnic, una fila ordenada de hormigas está marchando. Se ve algo así:

```
..ant..ant.ant...ant.ant..ant.ant....ant..ant.ant.ant...ant..
```

Pero de repente surge un rumor de que se ha visto un sándwich de pollo caído en el suelo adelante. ¡Las hormigas avanzan! ¡Oh no, es una estampida de hormigas! 🐜🏃‍♀️

Algunas de las hormigas más lentas son pisoteadas, y sus pobres cuerpos quedan destrozados en pedazos dispersos.

La carnicería resultante se ve así:

```
...ant...ant..nat.ant.t..ant...ant..ant..ant.anant..t
```

¿Puedes encontrar cuántas hormigas han muerto? 😵

### Solución: Función DeadAnts

La función `DeadAnts` resuelve este problema contando el número máximo de ocurrencias de las letras 'a', 'n' y 't' en una cadena dada, excluyendo las ocurrencias que forman la subcadena "ant". El resultado de esta función es el número máximo de hormigas que han muerto en la estampida. 🕵️‍♂️🐜💀

## Requerimientos

Para ejecutar el proyecto **DeadAnts**, asegúrate de tener lo siguiente:

1. **Node.js**: Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde [el sitio oficial de Node.js](https://nodejs.org/).

2. **Git**: Si aún no lo tienes, instala Git para clonar el repositorio del proyecto. Puedes descargar Git desde [aquí](https://git-scm.com/downloads).

3. **BenchmarkJS**:Este proyecto utiliza la biblioteca [Benchmark.js](https://benchmarkjs.com/) para comparar el rendimiento de dos implementaciones de una función llamada DeadAnts. :construction:📊

4. **Jest**: Este proyecto utiliza la libreria [Jest](https://jestjs.io/docs/getting-started) para realizar los test.  

5. **Editor de código**: Utiliza un editor de código como Visual Studio Code, Sublime Text o cualquier otro de tu elección.

## Pasos para Reproducir el benchmark

Sigue estos pasos para ejecutar el proyecto:

1. **Clona el Repositorio**:
   - Abre una terminal o línea de comandos.
   - Navega a la ubicación donde deseas clonar el repositorio.
   - Ejecuta el siguiente comando para clonar el repositorio:

     ```
     git clone https://github.com/LuisEstebanC/DeadAnts/tree/PairProgramingCode
     ```

2. **Instala Dependencias**:
   - Navega al directorio del proyecto:

     ```
     cd DeadAnts
     ```
   - Instala las dependencias ejecutando:

     ```
     npm install
     ```

3. **Ejecuta la Aplicación**:
   - Ejecuta el siguiente comando para iniciar la aplicación:

     ```
     node Benchmarkjs.js
     ```

4. **Explora el Proyecto**:

   - Ahora puedes explorar la aplicación y contar hormigas muertas.💀

## Archivos del Proyecto

- `BenchMarkjs.js`: Contiene el código principal para la comparación de rendimiento.
- `DeadAntsNewApp.js`: Nueva implementación de la función DeadAnts.
- `DeadAntsOldApp.js`: Implementación original de la función DeadAnts. 📁

¡Buena suerte en tu búsqueda de hormigas muertas! 🕵️‍♀️🔍🐜💀


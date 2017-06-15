module.exports = {
  title: 'Estilos dinámicos + Estilos estáticos',
  subtitle: '',
  description: `
  Una de las partes agradables de glamorous es que te permite hacer una clara
  separación entre sus estilos dinámicos y estáticos, forzándolo a elegir
  entre un objeto literal y una función. He aquí un ejemplo de tener ambos estilos
  dinámicos y estáticos:

  ~~~js
  const MyLink = glamorous.a(
    {
      color: 'blue',
      textDecoration: 'none',
    },
    ({size = 'small'}) => ({
      fontSize: size === 'big' ? 24 : 16,
    }),
    // puede seguir proporcionando cualquier número de argumentos
    // y ~glamor~ los fusionará. En el caso de un
    // conflicto de estilos, el último gana.
  )
  ~~~

  Puedes ver una vista previa en vivo de este ejemplo en [codesandbox](https://codesandbox.io/s/mZkpo0lKA).

  <details>
  <summary>Tenga en cuenta, que también puede utilizar arrays de estilos si los necesita:</summary>

  ~~~js
  const MyDiv = glamorous.div(
    [
      {
        [phoneMediaQuery]: {
          lineHeight: 1.2,
        },
      },
      {
        [phoneMediaQuery]: {
          lineHeight: 1.3, // esto ganará porque viene de último
        },
      },
    ],
    ({big, square}) => {
      const bigStyles = big ?
      {
        [phoneMediaQuery]: {
          fontSize: 20,
        },
      } :
        {}

      const squareStyles = square ?
      {
        [phoneMediaQuery]: {
          borderRadius: 0,
        },
      } :
      {
        [phoneMediaQuery]: {
          borderRadius: '50%',
        },
      }
      // Tenga en cuenta que estoy devolviendo un array aquí
      return [bigStyles, squareStyles]
    },
  )

  // el resultado de <MyDiv big={true} square={false} /> será:
  // @media (max-width: 640px) {
  //   .css-1bzhvkr,
  //   [data-css-1bzhvkr] {
  //     line-height: 1.3;
  //     font-size: 20px;
  //     border-radius: 50%;
  //   }
  // }
  //
  // <div
  //   class="css-1bzhvkr"
  // />
  ~~~

  </details>
  `.replace(/~/g, '`'),
  filename: __filename,
}

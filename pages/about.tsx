import Container from '../components/container';
import Layout from '../components/layout';

export default function About({ preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <div className='s-content'>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed mattis velit. Donec vehicula, lectus sit amet finibus scelerisque, leo mauris scelerisque ligula, eu luctus neque justo pulvinar sem. Morbi faucibus lobortis quam, sed egestas tellus imperdiet sed. Morbi placerat elit fermentum, cursus tellus id, congue metus. Phasellus elementum sodales lacus, id facilisis justo.
            Nulla
          </p>
          <p>
            at blandit erat. Curabitur finibus at sem ut ultrices. Morbi tellus felis, consectetur ac mi sed, laoreet facilisis ipsum. Integer sit amet tortor finibus felis tristique congue eget eu massa. Suspendisse potenti. Aenean eu iaculis ex. Morbi accumsan turpis eu ligula auctor euismod. Nam sit amet imperdiet ipsum. Vestibulum cursus sapien ipsum, eu vestibulum tortor pharetra vulputate.
          </p>
        </div>
      </Container>
    </Layout>
  );
}

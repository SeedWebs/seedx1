import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';

export default function About({ preview }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>ABOUT</title>
      </Head>
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
          Morbi placerat elit fermentum, cursus tellus id, congue metus. Phasellus elementum sodales lacus, id facilisis justo. Nulla at blandit erat. Curabitur finibus at sem ut ultrices. Morbi tellus felis, consectetur ac mi sed, laoreet facilisis ipsum. Integer sit amet tortor finibus felis tristique congue eget eu massa. Suspendisse potenti. Aenean eu iaculis ex. Morbi accumsan turpis eu
          ligula auctor euismod. Nam sit amet imperdiet ipsum. Vestibulum cursus sapien ipsum, eu vestibulum tortor pharetra vulputate.
          <p>
            Aenean in diam nec odio blandit egestas et aliquam orci. Praesent vitae vestibulum nibh. Aliquam rutrum viverra ligula non placerat. Sed iaculis scelerisque velit ut lacinia. Vestibulum maximus quam ante, at efficitur mi vulputate non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend neque sed nisl hendrerit dignissim. Pellentesque faucibus, mi eget tincidunt
            efficitur, libero tellus ullamcorper urna, ac vulputate arcu libero hendrerit neque. Fusce ac mauris ut nulla ornare viverra.
          </p>
          <p>
            Morbi quis turpis hendrerit, egestas urna vel, cursus magna. Aenean posuere nibh id risus viverra volutpat. Maecenas justo libero, imperdiet ac bibendum a, sodales at mi. Praesent sit amet massa at leo gravida vestibulum. Donec sed gravida sapien. Fusce tempus rutrum massa, nec volutpat libero fringilla scelerisque. Donec tellus nulla, tristique eu urna rutrum, laoreet suscipit leo.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non pulvinar ipsum. Morbi nec felis id velit vehicula sagittis. Proin vestibulum gravida est. Etiam vel hendrerit neque, ut luctus enim. Morbi pharetra congue velit ac facilisis. Nunc eros nibh, bibendum eu faucibus id, iaculis vitae lectus. Quisque eu consequat risus. Aenean scelerisque nisi nec
            egestas ornare.
          </p>
          <div className='_space'></div>
        </div>
      </Container>
    </Layout>
  );
}

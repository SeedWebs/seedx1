import Container from './container';
import { SITE_NAME } from '../lib/constants';

export default function Footer() {
  return (
    <footer className='site-footer'>
      <Container>©2022 {SITE_NAME}. All rights reserved.</Container>
    </footer>
  );
}

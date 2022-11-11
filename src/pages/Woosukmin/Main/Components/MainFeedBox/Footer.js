import React from 'react';

const Footer = () => {
  return (
    <footer>
      <ul className="end">
        {FOOTER_INFO_LIST.map(info => (
          <li key={info.id} className="end">
            <a href={info.link} className="end">
              {info.text}{' '}
            </a>
          </li>
        ))}
      </ul>
      <div className="end-2">
        <br />© 2022 WESTAGRAM FROM META
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_INFO_LIST = [
  { id: 1, link: 'https://about.instagram.com', text: '소개•' },
  { id: 2, link: 'https://help.instagram.com', text: '도움말•' },
  { id: 3, link: 'https://about.instagram.com/blog', text: '홍보 센터•' },
  {
    id: 4,
    link: 'https://developers.facebook.com/docs/instagram',
    text: 'API•',
  },
  {
    id: 5,
    link: 'https://about.instagram.com/about-us/careers',
    text: '채용 정보•',
  },
  {
    id: 6,
    link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
    text: '개인정보처리방침•',
  },
  { id: 7, link: 'https://help.instagram.com/581066165581870/', text: '약관•' },
  {
    id: 8,
    link: 'https://www.instagram.com/explore/locations/',
    text: '위치',
  },
];

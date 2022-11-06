import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import { AiFillGithub, AiFillYoutube, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
import ScreenEgg from '../ScreenEgg';

const socialNetworks = [
  {
    id: 1,
    href: "",
    icon: AiFillGithub,
  },
  {
    id: 2,
    href: "",
    icon: AiFillYoutube,
  },
  {
    id: 3,
    href: "",
    icon: AiFillTwitterCircle,
  }, 
  {
    id: 4,
    href: "",
    icon: AiFillLinkedin,
  }
]

const SocialNetworks = ({

    className
}) => {
  return (
    <ScreenEgg>
    <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetwork) => (
          <li key={socialNetwork.id}
                className={styles.listItem}
                >
                  <a href={socialNetwork.href} 
                      target="_blank"
                      className={styles.listLink}
                      rel="noreferrer"
                  >
                    {React.createElement(
                      socialNetwork.icon,
                      {
                        color: 'black',
                        size: 50
                      }
                      )}
                  </a>

          </li>
        ))}
    </ul>
    </ScreenEgg>
  )
}

export default SocialNetworks;
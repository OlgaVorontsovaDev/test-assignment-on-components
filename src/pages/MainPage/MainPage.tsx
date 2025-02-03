import { Button } from '../../components/Button';
import {
  buttonTableHeaders,
  buttonTableRows,
  counterTableHeaders,
  counterTableRows,
} from './static';
import { Table } from './innerComponents/Table';
import styles from './MainPage.styles.module.styl';
import { useTheme } from '../../theme/useTheme';

export const MainPage = () => {
  const { toggleTheme, theme } = useTheme();
  const buttonText = theme === 'light' ? 'dark' : 'light';

  return (
    <div>
      <header className={styles.header}>
        <div>
          <p>Test assignment on components</p>
          <p>Prod by Olga Vorontsova</p>
        </div>
        <div className={styles.header__buttonBlock}>
          <p>change theme to: </p>
          <Button onClick={toggleTheme}>
            <Button.ContentGroup>
              <Button.Label>{buttonText}</Button.Label>
            </Button.ContentGroup>
          </Button>
        </div>
      </header>

      <div className={styles.demoBlock}>
        <p>Counter component:</p>
        <Table headers={counterTableHeaders} rows={counterTableRows} />
      </div>

      <div className={styles.demoBlock}>
        <p>Button component:</p>
        <Table headers={buttonTableHeaders} rows={buttonTableRows} />
      </div>
    </div>
  );
};

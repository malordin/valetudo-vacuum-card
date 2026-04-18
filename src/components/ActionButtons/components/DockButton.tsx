import type { SupportedLanguage } from '../../../i18n/locales';
import { useTranslation } from '../../../hooks';
import '../ActionButtons.scss';
import { DOCK_ICON_SVG } from '../../../constants/icons';

interface DockButtonProps {
  onClick: () => void;
  language?: SupportedLanguage;
  disabled?: boolean;
}

export function DockButton({ onClick, language = 'en', disabled }: DockButtonProps) {
  const { t } = useTranslation(language);

  return (
    <button onClick={onClick} className="action-buttons__dock" disabled={disabled}>
      <span className="action-buttons__icon">{DOCK_ICON_SVG}</span>
      <span>{t('actions.dock')}</span>
    </button>
  );
}

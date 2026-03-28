import { LogoItem } from '../../types/content';

type LogoGridProps = {
  items: LogoItem[];
};

export function LogoGrid({ items }: LogoGridProps) {
  return (
    <div className="logo-grid" aria-label="Logo grid">
      {items.map((item) => (
        <div key={item.name} className="logo-grid__item">
          <img src={item.src} alt={item.alt} className="logo-grid__image" />
        </div>
      ))}
    </div>
  );
}

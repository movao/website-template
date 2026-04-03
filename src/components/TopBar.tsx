interface TopBarProps {
  text: string;
  href?: string;
  linkText?: string;
}

export default function TopBar({ text, href, linkText }: TopBarProps) {
  return (
    <div className="bg-primary text-background text-base text-center py-2 px-4">
      <span>{text}</span>
      {href && linkText && (
        <>
          {' '}
          <a href={href} className="underline font-medium hover:opacity-80 transition-opacity">
            {linkText}
          </a>
        </>
      )}
    </div>
  );
}

export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">H</span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-brand-primary tracking-tight leading-none">
          HITACHI
        </h1>
        <span className="text-xs text-muted-foreground font-medium">
          Energy Management System
        </span>
      </div>
    </div>
  );
}
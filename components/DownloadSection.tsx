import { Laptop, Terminal, CloudDownload } from 'lucide-react';

const DownloadCard = ({ icon, title, version, size, description, downloadLink, platform }: {
  icon: React.ReactNode;
  title: string;
  version: string;
  size: string;
  description: string;
  downloadLink: string;
  platform: string;
}) => (
  <div className="card-custom h-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 mb-4 text-primary">{icon}</div>
      <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground">{version} • {size}</p>
    </div>
    <div className="p-6 pt-0 text-center flex-grow flex flex-col justify-between">
      <p className="text-muted-foreground mb-6">{description}</p>
      <a href={downloadLink} className="btn btn-outline mt-auto">
        <CloudDownload className="mr-2 h-4 w-4" />
        Download for {platform}
      </a>
    </div>
  </div>
);

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-secondary-foreground">Download SoundFast</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest version of SoundFast for your operating system.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DownloadCard
            icon={<Laptop className="w-full h-full" />}
            title="Windows"
            version="v1.2.0"
            size="85 MB"
            description="Get the best audio experience on your Windows PC. Optimized for performance and quality."
            downloadLink="#"
            platform="Windows"
          />
          <DownloadCard
            icon={<Terminal className="w-full h-full" />}
            title="Linux"
            version="v1.1.5"
            size="72 MB"
            description="Powerful audio tools for Linux users. Supports various distributions."
            downloadLink="#"
            platform="Linux"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
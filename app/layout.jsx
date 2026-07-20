import './globals.css';

export const metadata = {
  title: 'Gold Miles USA | Premium Freight Transportation',
  description: 'Refrigerated and dry van transportation across the United States.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import FooterColumn from "./FooterColumn"; // Import the FooterColumn component
import { footerData } from "./footerData"; // Import the footer data
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        {footerData.map((col, index) => (
          <FooterColumn key={index} title={col.title} items={col.items} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400 space-y-2">
        <p>&copy; {new Date().getFullYear()} StockTracker Pro. All rights reserved.</p>
        <p>This is a demo project. No investment advice is being provided.</p>
      </div>
    </footer>
  );
}

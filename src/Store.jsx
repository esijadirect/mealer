import { useMemo, useState } from "react";
import Header from "./store_components/Header/Header.jsx";
import CategoryNav from "./store_components/CategoryNav/CategoryNav.jsx";
import PromoStrip from "./store_components/PromoStrip/PromoStrip.jsx";
import Sidebar from "./store_components/Sidebar/Sidebar.jsx";
import ListingGrid from "./store_components/Listings/ListingGrid.jsx";
import Footer from "./store_components/Footer/Footer.jsx";
import "./store_components/store.css";

const categories = [
    { id: "vehicles", name: "Vehicles", icon: "M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z M6 13h12 M7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z M17 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" },
    { id: "property", name: "Property", icon: "M3 11l9-7 9 7 M5 10v10h14V10" },
    { id: "phones-tablets", name: "Phones & Tablets", icon: "M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M10 18h4" },
    { id: "electronics", name: "Electronics", icon: "M4 5h16v11H4z M9 20h6 M9 8h6 M9 12h3" },
    { id: "home-furniture", name: "Home & Furniture", icon: "M4 10l8-6 8 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z M9 20v-6h6v6" },
    { id: "fashion", name: "Fashion", icon: "M8 3l4 3 4-3 3 4-3 3v10H8V10L5 7z" },
    { id: "beauty-care", name: "Beauty & Care", icon: "M12 3v6 M9 6h6 M7 12a5 5 0 0 0 10 0 M9 21h6l-1-5H10z" },
    { id: "services", name: "Services", icon: "M14.7 3.3l6 6-3 3-6-6z M4 20l4.5-1 8-8-3.5-3.5-8 8z" },
    { id: "repair-construction", name: "Repair & Construction", icon: "M9 3l3 3-7 7-3-3z M13 7l4-4 3 3-4 4 M13 11l7 7-3 3-7-7" },
    { id: "commercial-equipment", name: "Commercial Equipment", icon: "M4 4h16v6H4z M4 14h7v6H4z M13 14h7v6h-7z" },
    { id: "leisure-activities", name: "Leisure & Activities", icon: "M12 21s-7-4.5-7-10a5 5 0 0 1 10 0 M12 3v18" },
    { id: "babies-kids", name: "Babies & Kids", icon: "M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6z M6 20c0-4 2.5-6 6-6s6 2 6 6" },
    { id: "food-agriculture", name: "Food & Agriculture", icon: "M4 3s-1 6 4 8-1 8-1 8 M11 3s6 1 6 7-6 10-6 10" },
    { id: "jobs", name: "Jobs", icon: "M4 8h16v11H4z M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" },
];

const promos = [
    { id: "smart-search", icon: "🔍", title: "Smart Search", sub: "Find exactly what you need, faster" },
    { id: "post-job", icon: "💼", title: "Post a job", sub: "Reach thousands of candidates" },
    { id: "how-to-sell", icon: "📦", title: "How to sell", sub: "List an ad in under 2 minutes" },
    { id: "how-to-buy", icon: "🛒", title: "How to buy", sub: "Tips for a safe, easy purchase" },
];

const listings = [
    { id: 1, category: "vehicles", badge: "verified", badgeLabel: "Verified ID", price: "₦ 4,990,000", title: "Sedan, Automatic, 2013 Model - Clean Title", desc: "Well maintained, engine and gear in perfect condition, ready to drive.", cond: "Used", extra: "Automatic", loc: "Lagos, Isolo", time: "Enterprise", tier: "enterprise", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop" },
    { id: 2, category: "vehicles", badge: "vip", badgeLabel: "VIP", price: "₦ 150,000,000", title: "Luxury SUV, Full Option, Premium Leather Interior", desc: "Just arrived, super clean, full option premium trim.", cond: "Foreign Used", extra: "Automatic", loc: "Lagos, Ikeja", time: "5+ yrs", tier: "vip_gold", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop" },
    { id: 3, category: "vehicles", badge: "diamond", badgeLabel: "Diamond", price: "₦ 18,000,000", title: "Premium Wagon, HSE Trim, Accident Free", desc: "Neatly used, duty paid, engine and interior in great shape.", cond: "Local Used", extra: "Automatic", loc: "Lagos, Surulere", time: "Diamond", tier: "diamond", img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop" },
    { id: 4, category: "phones-tablets", badge: "premium", badgeLabel: "Premium", price: "₦ 120,000", title: "Smartphone 64GB, Black, Face Unlock", desc: "Face ID working perfectly, battery condition good.", cond: "Used", extra: "-", loc: "Lagos, Ojo", time: "New listing", tier: "", img: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=300&fit=crop" },
    { id: 5, category: "phones-tablets", badge: "verified", badgeLabel: "Verified ID", price: "₦ 250,000", title: "Smartphone 128GB, White, Unlocked", desc: "Everything working perfectly, no repairs needed.", cond: "Used", extra: "-", loc: "Lagos, Ikeja", time: "5+ yrs", tier: "vip_gold", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop" },
    { id: 6, category: "vehicles", badge: "diamond", badgeLabel: "Diamond", price: "₦ 60,000", title: "Heavy Duty Battery, 1 Year Guarantee", desc: "Durable and reliable, ideal for most vehicle types.", cond: "Brand New", extra: "-", loc: "Abuja, Garki", time: "3+ yrs", tier: "diamond", img: "https://images.unsplash.com/photo-1620691912190-8c4b2f3a0d6d?w=400&h=300&fit=crop" },
    { id: 7, category: "vehicles", badge: "verified", badgeLabel: "Verified ID", price: "₦ 330,000", title: "Heavy Duty Tyres, All Vehicle Types", desc: "High quality, durable tyres for all vehicle types.", cond: "Brand New", extra: "-", loc: "Oyo, Ibadan", time: "New", tier: "", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=300&fit=crop" },
    { id: 8, category: "vehicles", badge: "premium", badgeLabel: "Premium", price: "₦ 93,500,000", title: "Full-Size SUV, Limited Edition, Nothing to Fix", desc: "Absolutely nothing to fix, well maintained interior.", cond: "Foreign Used", extra: "Automatic", loc: "Abuja, Gwarinpa", time: "Enterprise", tier: "enterprise", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop" },
];

const defaultCategory = categories[0].id;

const Store = () => {
    const [activeCategory, setActiveCategory] = useState(defaultCategory);
    const [activeSidebar, setActiveSidebar] = useState("trending");
    const [searchQuery, setSearchQuery] = useState("");
    const [favorites, setFavorites] = useState(new Set());

    const sidebarItems = useMemo(
        () => [
            { id: "post-ad", name: "Post an ad", icon: "M12 5v14M5 12h14", active: false },
            { id: "trending", name: "Trending", icon: "M3 17l6-6 4 4 8-8", active: true },
            { id: "divider-1", divider: true },
            ...categories.map((c) => ({ id: `cat-${c.id}`, name: c.name, icon: c.icon, active: false })),
        ],
        []
    );

    const visibleListings = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();
        return listings.filter((listing) => {
            const categoryMatches = activeCategory ? listing.category === activeCategory : true;
            const queryMatches =
                !normalizedQuery ||
                `${listing.title} ${listing.desc} ${listing.loc} ${listing.cond}`
                    .toLowerCase()
                    .includes(normalizedQuery);
            return categoryMatches && queryMatches;
        });
    }, [activeCategory, searchQuery]);

    function handleCategorySelect(categoryId) {
        setActiveCategory(categoryId);
        setActiveSidebar(`cat-${categoryId}`);
    }

    function handleSidebarSelect(itemId) {
        setActiveSidebar(itemId);
        if (itemId.startsWith("cat-")) {
            setActiveCategory(itemId.replace("cat-", ""));
        }
        if (itemId === "trending") {
            setActiveCategory(defaultCategory);
        }
    }

    function handleToggleFavorite(listingId) {
        setFavorites((prev) => {
            const next = new Set(prev);
            if (next.has(listingId)) {
                next.delete(listingId);
            } else {
                next.add(listingId);
            }
            return next;
        });
    }

    return (
        <div className="store-page">
            <header className="site-header">
                <Header onSearch={setSearchQuery} />
                <CategoryNav
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={handleCategorySelect}
                />
            </header>

            <main className="container">
                <PromoStrip promos={promos} />

                <div className="main-layout">
                    <Sidebar
                        items={sidebarItems}
                        activeItem={activeSidebar}
                        onSelectItem={handleSidebarSelect}
                    />

                    <section>
                        <div className="content-head">
                            <h2>Trending listings</h2>
                            <span>{visibleListings.length} items</span>
                        </div>
                        <ListingGrid
                            listings={visibleListings}
                            favorites={favorites}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Store;
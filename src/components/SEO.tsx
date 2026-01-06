import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
}

export function SEO({
    title,
    description,
    keywords,
    ogImage = "/logo.png",
    ogType = "website"
}: SEOProps) {
    const { t } = useTranslation();

    const defaultTitle = t("home.seo.title");
    const defaultDescription = t("home.seo.description");
    const siteName = t("nav.home");

    const displayTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const displayDescription = description || defaultDescription;
    const displayKeywords = keywords || "صيانة معدات ثقيلة, هيدروليك, ميكانيك معدات, قطع غيار, الرياض, المساعد المبدع, صيانة بلدوزرات, صيانة بوبكات";

    return (
        <Helmet>
            <title>{displayTitle}</title>
            <meta name="description" content={displayDescription} />
            <meta name="keywords" content={displayKeywords} />

            {/* Open Graph */}
            <meta property="og:title" content={displayTitle} />
            <meta property="og:description" content={displayDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={displayTitle} />
            <meta name="twitter:description" content={displayDescription} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}

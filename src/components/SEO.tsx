import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
}

export function SEO({
    title = "مركز المساعد المبدع | صيانة المعدات الثقيلة بالرياض",
    description = "مركز المساعد المبدع - متخصصون في صيانة وإصلاح المعدات الثقيلة والهيدروليك والكهرباء والديزل في الرياض. خبرة واحترافية وضمان شامل.",
    keywords = "صيانة معدات ثقيلة, هيدروليك, ميكانيك معدات, قطع غيار, الرياض, المساعد المبدع, صيانة بلدوزرات, صيانة بوبكات",
    ogImage = "/logo.png",
    ogType = "website"
}: SEOProps) {
    const siteTitle = title.includes("الساعد المبدع") ? title : `${title} | مركز المساعد المبدع`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
        </Helmet>
    );
}

import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
	// Define your metadata here
	// For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
	<Banner storageKey='some-key'>这个项目还在开发中，即将正式上线Beta。</Banner>
);
const navbar = (
	<Navbar projectLink='https://link.qingyon.com' logo={<b>Link</b>} />
);
const footer = (
	<Footer>{new Date().getFullYear()} © 清韵科技（绍兴）有限公司</Footer>
);

export default async function RootLayout({ children }) {
	return (
		<html
			// Not required, but good for SEO
			lang='zh-CN'
			// Required to be set
			dir='ltr'
			// Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
			suppressHydrationWarning>
			<Head
			// ... Your additional head options
			>
				{/* Your additional tags should be passed as `children` of `<Head>` element */}
			</Head>
			<body>
				<Layout
					banner={banner}
					navbar={navbar}
					pageMap={await getPageMap()}
					feedback={{ content: null }}
					editLink={null}
					footer={footer}
					// ... Your additional layout options
				>
					{children}
				</Layout>
			</body>
		</html>
	);
}

import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Business Matchmaking Has Never Been Easier
			</title>
			<meta name={"description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:title"} content={"Business Matchmaking Has Never Been Easier"} />
			<meta property={"og:description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/OG-image.png?v=2021-09-22T11:33:13.239Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/favicon%2032x32.png?v=2021-09-22T11:33:41.498Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/270x270.png?v=2021-09-22T11:33:55.934Z"} />
		</Helmet>
		<Section padding="38px 0 38px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" display="flex" />
			<Link
				text-decoration-line="initial"
				hover-opacity=".8"
				width="20%"
				md-width="40%"
				sm-width="50%"
				href="/"
				display="flex"
			>
				<Text font="normal 700 14px/1.5 --fontFamily-googleFiraSans" color="#1064C7" transform="rotate(-90deg)" margin="0px 0px 0px 0px">
					BL
				</Text>
				<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
					Birlinkteyiz
				</Text>
			</Link>
			<Components.QuarklycommunityKitMobileSidePanel md-justify-content="flex-end">
				<Override slot="Children" display="flex" />
				<Override slot="Content" padding="0px 0px 0px 0px" md-margin="38px 0px 0px 0px" />
				<Override
					slot="Button Text"
					md-font="--lead"
					md-text-transform="uppercase"
					sm-margin="3px 6.3px 0px 0px"
					md-margin="1px 6.3px 0px 0px"
				/>
				<Box
					justify-content="flex-end"
					md-align-items="center"
					md-flex-direction="column"
					md-justify-content="center"
					md-padding="20px 0px 20px 0px"
					md-margin="0px 0px 0px 0px"
					display="flex"
				>
					<Link
						href="#hakkimizda"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						padding="5px 10px 5px 10px"
						margin="0px 15px 0px 15px"
						transition="opacity 0.3s ease-in-out 0s"
						md-margin="0 0px 8px 0px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						hover-opacity=".8"
					>
						Hakkımızda
					</Link>
					<Link
						md-margin="0 0px 8px 0px"
						href="#hizmetler"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						margin="0px 15px 0px 15px"
						padding="5px 10px 5px 10px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						Projeler
					</Link>
					<Link
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						href="#Sponsorlar"
						text-decoration-line="initial"
						color="--dark"
						font="--base"
						padding="5px 10px 5px 10px"
						margin="0px 15px 0px 15px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-margin="0 0px 8px 0px"
					>
						Sponsorlar
					</Link>
					<Link
						color="--dark"
						margin="0px 0px 0px 15px"
						href="#bizeulasin"
						font="--base"
						padding="5px 10px 5px 10px"
						transition="opacity 0.3s ease-in-out 0s"
						hover-opacity=".8"
						md-margin="0 0px 8px 0px"
						md-font="normal 400 18px/1.5 &quot;Fira Sans&quot;, sans-serif"
						text-decoration-line="initial"
					>
						Bize Ulaşın
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section background="--color-darkL1" padding="0px 0 0px 0" quarkly-title="HeroBlock" md-flex-wrap="wrap">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				padding="80px 0px 40px 0px"
				md-padding="40px 0px 40px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				lg-padding="80px 32px 40px 0px"
				md-width="100%"
			>
				<Box
					lg-width="100%"
					display="flex"
					flex-direction="column"
					width="70%"
					justify-content="space-between"
					flex="1 1 0%"
				>
					<Text font="--headline3" color="--light" sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="0px 0px 0px 0px">
						BU YOLDA HEP BİRLİNKTEYİZ
					</Text>
					<Text margin="32px 0px 0px 0px" font="--lead" color="--light" md-padding="0px 0px 40px 0px">
						Akıllı şehircilik için yeni fikirleriniz mi var? Farklı bir konsept ile 
					katma değer sağlamak istiyorsunuz ancak fikrinizi nerede paylaşabileceğinizi bilmiyor olabilirsiniz. 
					Belki de yeni bir uygulama geliştirdiniz ancak reklamını nerede yapacağınız konusunda sorun mu yaşıyorsunuz?
					Bize ulaşın, sizin için yayınlayalım.
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
			>
				<Image
					src="https://www.kozmoslisesi.com/wp-content/uploads/2020/08/akilli-sehir-nedir-akilli-sehir-uygulamalari-nelerdir.jpeg"
					max-width="100%"
					min-height="600px"
					object-fit="cover"
					lg-min-height="500px"
					sm-min-height="400px"
				/>
			</Box>
		</Section>
		<Section padding="104px 0 104px 0" lg-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				lg-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Text
					font="normal 500 60px/1.2 --fontFamily-googleFiraSans"
					color="--dark"
					md-font="normal 500 40px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					lg-margin="0px 0px 32px 0px"
					margin="0px 0px 0px 0px"
				>
					Neden Biz?
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				lg-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-wrap="wrap"
			>
				<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif">
					Projeniz ile ilgili kısa bir açıklama ve görselleri paylaşın. Biz sizin için gerekli düzenlemeleri yapalım ve paylaşalım.{" "}
				</Text>
				<Box width="33.333%" margin="32px 0px 0px 0px" padding="0px 30px 0px 0px" md-width="100%">
					<Text color="--dark" margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans">
						Başlarken
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Kayıt
					</Text>
					<Text font="--base" color="--dark" margin="0px 0px 8px 0px">
						Proje Yayın Talebi
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Web Site Yayın Talebi
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
						Uygulama Yayın Talebi
					</Text>
				</Box>
				<Box padding="0px 30px 0px 0px" md-width="100%" width="33.333%" margin="32px 0px 0px 0px">
					<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
						Planlama
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Yayın ve Tık Sayısı Belirleme
					</Text>
					<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
						Sponsorluk Alma
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				width="50%"
				align-items="center"
				border-style="solid"
				padding="80px 0px 80px 0px"
				md-padding="60px 0px 60px 0px"
				empty-border-width="1px"
				border-color="#C4C4C4"
				empty-border-style="solid"
				empty-border-color="LightGray"
				border-width="1px 0px 0px 0px"
				empty-min-height="64px"
				display="flex"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						lg-font="700 30px/48px &quot;Fira Sans&quot;, sans-serif"
						color="--primary"
						word-break="normal"
						white-space="normal"
						font="700 40px/48px &quot;Fira Sans&quot;, sans-serif"
						overflow-wrap="normal"
					>
						BL
					</Span>
					{" "}Birlinkteyiz
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline4"
					color="--light"
					lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					background="--color-primary"
					padding="32px 24px 32px 24px"
				>
					Mobil uygulamalara özel ilk ay AnaSayfa'da 10.000 gösterim hakkı veriyoruz. Herkese adil olunması adına sonraki aylarda gösterim sayısı 3.000 ile sınırlı olacaktır. Bu fırsatı kaçırmayın.
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" md-flex-wrap="wrap" flex-direction="row" />
			<Box
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				display="flex"
			>
				<Image
					max-width="100%"
					min-height="632px"
					object-fit="cover"
					sm-min-height="16px"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLjs0bXuOTC2p-MmUsnJ-5qdDj0qsNqXWEjJAMa_yk4zgDn0Uk3U4WCaYt1hKtGdBYKxI&usqp=CAU"
				/>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="50%"
				empty-min-width="64px"
				empty-border-style="solid"
				display="flex"
				flex-direction="column"
				md-width="100%"
				empty-min-height="64px"
			>
				<Box
					empty-border-width="1px"
					empty-border-style="solid"
					empty-border-color="LightGray"
					padding="32px 32px 32px 32px"
					height="50%"
					empty-min-width="64px"
					empty-min-height="64px"
				>
					<Text
						width="60%"
						lg-width="100%"
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
					>
						Mobil Uygulama Kaydı
					</Text>
					<Text
						margin="0px 0px 65px 0px"
						font="--base"
						color="--dark"
						width="70%"
						lg-width="100%"
					>
						Uygulamanızı bizimle paylaşın, biz herkesle paylaşalım
					</Text>
					<Link
						font="--lead"
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					>
						Daha fazlası...
					</Link>
				</Box>
				<Box
					empty-border-style="solid"
					empty-border-color="LightGray"
					padding="32px 32px 32px 32px"
					background="--color-lightD1"
					height="50%"
					empty-min-width="64px"
					empty-min-height="64px"
					empty-border-width="1px"
				/>
			</Box>
		</Section>
		<Section padding="64px 0 0px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="0px"
				lg-grid-template-columns="1fr"
			/>
			<Box
				empty-border-color="LightGray"
				grid-column="1 / span 3"
				padding="16px 32px 60px 16px"
				lg-grid-column="auto / auto"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="0px 0px 16px 0px" font="--headline2">
					Sitemizde{" "}
					<Span
						color="--primary"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-overflow="clip"
						font="700 50px/60px &quot;Fira Sans&quot;, sans-serif"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						text-indent="0"
						hyphens="manual"
					>
						Etkinlik
					</Span>
					{" "}Takibi
				</Text>
				<Text
					lg-margin="0px 0px 16px 0px"
					margin="0px 0px 32px 0px"
					font="--lead"
					color="--dark"
					width="60%"
					lg-width="100%"
					sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
				>
					Bizi takip etmeyi unutmayın. Yeni etkinler ile paylaşımlarımız devam edecektir.
				</Text>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Components.Tabs
				width="100%"
				md-flex-wrap="wrap"
				margin="0px 0px -4px 0px"
				defaultTab="one"
				display="flex"
				flex-direction="row-reverse"
			>
				<Override slot="Tab :active" opacity="1" md-color="--dark" transform="translateX(0px)" />
				<Override slot="Tab two">
					Kullanıcı Dostu
				</Override>
				<Override slot="Tab three">
					Taleplerinizle İyileştirilmiş
				</Override>
				<Override slot="Tab four" margin="0px 0px 20px 0px">
					Etkin
				</Override>
				<Override slot="Tab one">
					Ücretsiz
				</Override>
				<Override
					slot="Tablist"
					flex-direction="column"
					md-width="100%"
					md-position="static"
					md-align-items="flex-start"
					md-order="1"
					md-flex-direction="row"
					width="25%"
					padding="16px 16px 16px 24px"
					lg-width="40%"
					md-padding="0px 0px 0px 0px"
					md-flex-wrap="wrap"
				/>
				<Override slot="TabPanels" width="75%" lg-width="60%" md-width="100%" />
				<Override
					slot="Tab"
					padding="16px 6px 16px 6px"
					transition="transform 1s ease 0s"
					color="--dark"
					sm-width="50%"
					sm-text-align="left"
					md-width="50%"
					sm-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
					md-color="--grey"
					text-align="left"
					background="rgba(32, 108, 236, 0)"
					margin="0px 0px 40px 0px"
					md-opacity="1"
					md-font="normal 400 16px/1.3 &quot;Fira Sans&quot;, sans-serif"
					font="--headline4"
					transform="translateX(0px)"
					opacity="0.5"
					md-margin="0px 0px 8px 0px"
				/>
				<Components.Tab tabId="one">
					<Override slot="Tab two">
						Animation
					</Override>
					<Image
						lg-height="460px"
						padding="0px 0px 0px 0px"
						src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						max-width="100%"
						height="560px"
						object-fit="cover"
						width="100%"
						srcSet="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Components.Tab>
				<Components.Tab tabId="two">
					<Image
						max-width="100%"
						height="560px"
						object-fit="cover"
						width="100%"
						lg-height="460px"
						src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
						srcSet="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Components.Tab>
				<Components.Tab tabId="three">
					<Image
						width="100%"
						lg-height="460px"
						src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
						max-width="100%"
						height="560px"
						object-fit="cover"
						srcSet="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Components.Tab>
				<Components.Tab tabId="four">
					<Image
						src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000"
						height="560px"
						object-fit="cover"
						width="100%"
						lg-height="460px"
						srcSet="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Components.Tab>
			</Components.Tabs>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" lg-flex-wrap="wrap" />
			<Box
				padding="16px 32px 65px 32px"
				border-style="solid"
				border-color="--color-grey"
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				background="--color-lightD1"
				border-width="1px 1px 1px 0px"
				lg-width="100%"
				lg-border-width="0px"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Box margin="0px 0px 54px 0px">
					<Text margin="15px 0px 16px 0px" font="--headline3" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						Standart Yayınlama
					</Text>
					<Text
						margin="0px 0px 8px 0px"
						font="--lead"
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
					>
						3.000 Gösterim/Ay Sıralamada En Önde
					</Text>
					<Text
						color="--dark"
						width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--lead"
					>
						Sınırsız site içinde gösterilme hakkı
					</Text>
				</Box>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
				>
					0 ₺
				</Link>
			</Box>
			<Box
				lg-border-width="0px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="50%"
				padding="16px 32px 65px 32px"
				border-color="--color-grey"
				border-style="solid"
				lg-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				position="relative"
				border-width="1px 0px 1px 0px"
			>
				<Image
					bottom="18px"
					left="auto"
					top="auto"
					lg-right="0px"
					sm-bottom="-40px"
					height="156px"
					position="absolute"
					right="88px"
					md-bottom="0px"
					sm-right="-40px"
					width="200px"
					src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00:09:23.228Z"
					srcSet="https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00%3A09%3A23.228Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box
					sm-flex-direction="column"
					margin="0px 0px 54px 0px"
					display="flex"
					width="100%"
					flex-wrap="wrap"
				>
					<Text
						width="100%"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						margin="15px 0px 16px 0px"
						font="--headline3"
						color="--dark"
					>
						Sponsorluk
					</Text>
					<Box width="50%" sm-width="100%">
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Özel Gösterim Sayfası
						</Text>
						<Text
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							margin="0px 0px 8px 0px"
						>
							30.000 Gösterim/Ay Sıralamada En Önde
						</Text>
						<Text
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
						/>
					</Box>
					<Box width="50%" sm-width="100%" />
				</Box>
				<Link
					color="--primary"
					padding="5px 35px 5px 0px"
					background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
					font="--lead"
					href="#"
					text-decoration-line="initial"
				>
					100 ₺
				</Link>
			</Box>
		</Section>
		<Section padding="0px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				padding="80px 32px 80px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				width="75%"
				display="flex"
				align-items="center"
				lg-width="55%"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				md-padding="32px 0px 32px 0px"
			>
				<Text
					width="80%"
					lg-width="100%"
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
				>
					Kendinizi gösterebileceğiniz{" "}
					<Span lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif" font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" color="--primary">
						birlinkteyiz
					</Span>
					{" "}platformuna bir şans vermeyi ihmal etmeyiniz.
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				padding="42px 32px 42px 32px"
				md-width="100%"
				flex-direction="column"
				md-border-width="0px"
				md-border-style="none"
				empty-min-width="64px"
				display="flex"
				empty-border-style="solid"
				border-color="--color-grey"
				border-style="solid"
				justify-content="center"
				sm-padding="16px 32px 0px 32px"
				border-width="0px 0px 0px 1px"
				empty-border-color="LightGray"
				width="25%"
				lg-width="45%"
				empty-border-width="1px"
			>
				<Text
					md-text-align="left"
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--dark"
					width="100%"
					text-align="center"
					md-margin="0px 0px 32px 0px"
				>
					Desteklediklerimiz
				</Text>
				<Components.QuarklycommunityKitCarousel
					aspectRatio="auto"
					md-padding="0px 0px 30% 0px"
					md-width="50%"
					showText={false}
					autoPlay
					showDots={false}
					slidesProp="5"
					sm-padding="0px 0px 22% 0px"
					sm-height="100px"
					showHead={false}
					height="150px"
					autoPlayIntervalProp="5s"
					overflow-y="hidden"
					md-overflow-x="visible"
					md-overflow-y="visible"
					showLink={false}
					showArrows={false}
				>
					<Override slot="Slide Image 1" src="https://s3.eu-central-1.amazonaws.com/stajim/media/images/company/cover/2226_20220915160845.jpg" />
					<Override slot="Slide Image 3" src="https://upload.wikimedia.org/wikipedia/tr/d/da/Bursa_B%C3%BCy%C3%BCk%C5%9Fehir_Belediyesi_Logosu.png" />
					<Override slot="Arrow" align-items="flex-end" background="none" md-display="none" />
					<Override slot="Slide Image" md-height="auto" md-width="70%" object-fit="contain" />
					<Override slot="Slide Image 4" src="https://framerusercontent.com/images/Nsi656D8b5ZOWJBNzy1p6PmST8.png" />
					<Override slot="Arrow Prev" background="none" />
					<Override slot="Slide Image 2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d0Crx9I3xaAUOLjTKBLnCfdgtV3RwQAFFvRLsAV1MQ&s" />
					<Override
						slot="Arrow Icon"
						border-width="1px"
						border-style="solid"
						border-radius="100%"
						size="38px"
						color="--primary"
						border-color="#206CEC"
					/>
					<Override slot="Slide Image 5" src="data:image/png;base64,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" />
					<Override slot="Arrow Next" background="none" />
					<Override slot="Slides" height="100%" />
				</Components.QuarklycommunityKitCarousel>
			</Box>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});
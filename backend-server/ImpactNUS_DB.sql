--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.type AS ENUM (
    'petition',
    'campaign'
);


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: pnc; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pnc (
    id integer NOT NULL,
    type public.type NOT NULL,
    title character varying(150) NOT NULL,
    recipient character varying(150)[] NOT NULL,
    organizer_id character varying(8) NOT NULL,
    anonymity boolean NOT NULL,
    date_started timestamp with time zone NOT NULL,
    date_end timestamp with time zone,
    description text NOT NULL,
    tags character varying(30)[],
    imageurl text,
    targetnumsupporters smallint NOT NULL,
    currnumsupporters smallint DEFAULT 0 NOT NULL,
    numfollowers smallint DEFAULT 0 NOT NULL,
    finished boolean DEFAULT false NOT NULL
);


--
-- Name: pnc_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pnc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pnc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pnc_id_seq OWNED BY public.pnc.id;


--
-- Name: support; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.support (
    support_id integer NOT NULL,
    poster_id character varying(8) NOT NULL,
    poster_description character varying(100),
    content text,
    pnc_id integer NOT NULL,
    anonymity boolean NOT NULL,
    dateposted timestamp with time zone NOT NULL
);


--
-- Name: support_support_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.support_support_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: support_support_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.support_support_id_seq OWNED BY public.support.support_id;


--
-- Name: updates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.updates (
    update_id integer NOT NULL,
    title character varying(150) NOT NULL,
    content text,
    dateposted timestamp with time zone NOT NULL,
    pnc_id integer NOT NULL,
    organizer_id character varying(8) NOT NULL
);


--
-- Name: updates_update_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.updates_update_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: updates_update_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.updates_update_id_seq OWNED BY public.updates.update_id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id character varying(8) NOT NULL,
    password character varying(50) NOT NULL,
    name text NOT NULL,
    following integer[]
);


--
-- Name: pnc id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pnc ALTER COLUMN id SET DEFAULT nextval('public.pnc_id_seq'::regclass);


--
-- Name: support support_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support ALTER COLUMN support_id SET DEFAULT nextval('public.support_support_id_seq'::regclass);


--
-- Name: updates update_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.updates ALTER COLUMN update_id SET DEFAULT nextval('public.updates_update_id_seq'::regclass);


--
-- Data for Name: pnc; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.pnc (id, type, title, recipient, organizer_id, anonymity, date_started, date_end, description, tags, imageurl, targetnumsupporters, currnumsupporters, numfollowers, finished) FROM stdin;
4	petition	Repeal the straw ban	{NUS,OSA}	e0322822	t	2019-05-19 23:20:00+08	\N	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.	{"Student Life"}	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8Ud-aJvfnJf7TKbcUZkGdnvRlFzqPIK28J8iEXopNsfvN2arhg	1000	250	150	f
5	petition	Release of final paper results	{"NUS Provost Office"}	e1234567	f	2019-05-07 23:20:00+08	\N	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.	{Academic}	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjT_DHspqCI2JptaUg_L4fXlzHgoasHjIvbFljRckf_U2aVZOuA	250	105	200	f
8	campaign	Recruitment of Volunteers	{"Make a Wish Foundation"}	e1234567	f	2019-05-11 23:20:00+08	2019-07-20 23:20:00+08	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.	{CIP}	https://images.jg-cdn.com/image/60d60f4f-13d4-42f0-a96e-152772ed195c.jpg?template=FundraisingPageHeroImageM	1000	200	50	f
56	petition	Use CORS again	{OSA}	e0309595	f	2019-07-29 17:15:21.981+08	\N	<p><u><em>ModReg</em></u><em> is highly not user-friendly and is full of bugs. We kindly request for a return to the old CORS system.</em></p>\n<p><em><strong>Don’t fix what isn’t broken!</strong></em></p>	\N	https://i.ibb.co/0BMF0B8/fkkkkk-go-back.jpg	977	2	0	f
7	campaign	Lorem Ipsum	{{"RC4 Residents"}}	e0322822	f	2019-05-05 23:20:00+08	2019-08-22 00:00:00+08	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu bibendum ante. Curabitur euismod porta ligula ut finibus. Nunc mattis dolor sit amet dolor varius euismod. Donec laoreet feugiat gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ultrices eget mauris non ultrices. Maecenas nec nisl vitae justo blandit convallis. Pellentesque eu pretium justo. In hac habitasse platea dictumst.</p>\n<p>Mauris bibendum risus ut urna rutrum luctus. Ut dictum id arcu at blandit. Integer orci risus, accumsan vitae porttitor in, malesuada ut dolor. Quisque sapien ante, dictum vitae magna in, laoreet bibendum nisl. Donec vitae volutpat urna, varius fermentum sem. Vestibulum accumsan non nisl vitae elementum. Sed blandit molestie nulla vel lobortis. Pellentesque eros nulla, gravida non sodales ac, rhoncus sed erat. Aenean dapibus, eros eget accumsan consequat, ante sem dictum nisi, ut scelerisque lacus enim eget enim. Integer pulvinar, metus nec volutpat cursus, nulla nibh ornare enim, ut scelerisque nibh odio id urna. Nam lobortis sem sed mauris lacinia posuere. Nullam id lobortis enim. Ut mollis laoreet ipsum, at aliquet erat bibendum vitae. Fusce gravida bibendum magna. Curabitur malesuada tellus id ultrices congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>\n<p>Nam consequat massa tellus, ut suscipit urna euismod ut. Maecenas id quam risus. Aenean congue id nunc nec vehicula. Quisque eu metus blandit, tincidunt justo ut, mattis magna. Proin vitae lacus quis risus tincidunt finibus. Donec nec semper eros, quis pharetra lectus. Nulla vehicula neque velit, nec tempor justo volutpat in. Ut consectetur neque dapibus, ultrices libero quis, efficitur tortor. Proin odio lacus, pulvinar non neque id, pellentesque viverra enim. Cras pulvinar luctus nunc, eget dictum nisi blandit nec. Nullam congue, lorem eget lobortis mollis, arcu felis semper orci, at mattis sapien velit sit amet ex. Ut mattis consectetur mattis.</p>\n<p>Nullam dignissim, ligula eu vestibulum faucibus, massa lacus eleifend lorem, eget interdum eros ante et arcu. Cras nunc metus, bibendum quis metus vitae, faucibus interdum nisi. In tincidunt elementum neque ut feugiat. Donec ligula eros, sodales at venenatis sed, vulputate ac tellus. Sed justo lorem, consectetur in ultricies in, rhoncus eget libero. In non pulvinar turpis. Aenean laoreet arcu vel neque ultricies, vehicula molestie felis consectetur. Praesent vulputate arcu non suscipit rhoncus. Maecenas pellentesque ipsum mauris, quis ultricies elit vehicula eu. Sed a tortor hendrerit, pellentesque lacus in, finibus elit.</p>\n<p>Fusce neque erat, venenatis eu vestibulum eu, tincidunt vitae lorem. Quisque in vehicula augue. In condimentum ornare suscipit. In mattis erat sit amet felis facilisis, iaculis laoreet nibh fermentum. Morbi sed enim eget mauris scelerisque eleifend. Sed non feugiat massa, sed mollis turpis. Morbi iaculis diam vel maximus tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris pulvinar ornare enim at feugiat. Ut ullamcorper commodo lorem et efficitur. Morbi convallis venenatis odio, eget pellentesque dolor imperdiet ac.</p>	{"Hostel Living"}	https://seo-hacker.com/wp-content/uploads/2018/04/Elements-of-a-Viral-Social-Media-Campaign-1024x768.jpg	700	700	300	t
2	petition	Install more recycling bins in hostels	{"Office Of Student Affairs"}	e0309594	t	2019-05-30 23:20:00+08	\N	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.	{"Campus Living"}	https://www.recycleaway.com/assets/images/product-photos/Iowa%20Rotocast/RB-1_Triple.jpg	300	130	100	f
6	campaign	OCIP Fundraising Project	{"All Students"}	e0309594	f	2019-05-07 23:20:00+08	2019-10-10 00:00:00+08	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.	{CIP}	http://www.rlafoundation.org.sg/Resources/EnrichingLives/Local-and-Overseas-Projects-Main-Page.aspx?width=716&height=475	250	150	300	f
39	petition	Test Petition	{{{NUS}}}	e0309594	f	2019-07-10 16:57:21.009+08	\N	<p>I hacked this petition</p>	{"Student Life"}	https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg	-50	1	0	t
54	campaign	This is a test campaign	{"No audience"}	e0309595	f	2019-07-29 16:48:37.511+08	2019-07-31 00:00:00+08	<p><strong>Stupiddddd</strong></p>	\N		500	0	0	f
\.


--
-- Data for Name: support; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.support (support_id, poster_id, poster_description, content, pnc_id, anonymity, dateposted) FROM stdin;
2	e0322822	NUS Student	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2	f	2019-07-10 23:20:00+08
3	e0322822	NUS Student	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	5	t	2019-07-10 23:20:00+08
4	e0322822	NUS Student	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	6	t	2019-07-10 23:20:00+08
5	e0322822	NUS Student	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	8	f	2019-07-10 23:20:00+08
10	e1234567	Kim Kardashian	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2	f	2019-07-15 23:20:00+08
11	e1234567	Kim Kardashian	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	4	t	2019-07-15 23:20:00+08
20	e0322822	Lalala	lol	39	f	2019-07-14 02:25:26.628+08
6	e0309594	Emperor	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	4	f	2019-07-12 23:20:00+08
7	e0309594	Emperor	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	5	f	2019-07-12 23:20:00+08
8	e0309594	Emperor	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	7	f	2019-07-12 23:20:00+08
9	e0309594	Emperor	Porta convallis. Integer magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	8	f	2019-07-12 23:20:00+08
17	e0309594	NUS Scrub	DUh!!!	2	f	2019-07-10 16:23:54.295+08
19	e0309594	Very Cool	Im anonymous	39	t	2019-07-12 19:16:20.447+08
\.


--
-- Data for Name: updates; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.updates (update_id, title, content, dateposted, pnc_id, organizer_id) FROM stdin;
5	We have hit 300 supporters!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-25 23:20:00+08	4	e0322822
4	We have hit 100 supporters!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-15 23:20:00+08	4	e0322822
6	We have hit 100 supporters!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-15 23:20:00+08	5	e1234567
7	We have hit 300 supporters!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-25 23:20:00+08	5	e1234567
10	Our beneficiaries express their gratitude!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-15 23:20:00+08	7	e0322822
11	Our Campaign has concluded!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-10 23:20:00+08	8	e1234567
12	Our beneficiaries express their gratitude!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-15 23:20:00+08	8	e1234567
2	We have hit 100 supporters!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-15 23:20:00+08	2	e0309594
3	We have hit 300 supporters!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-25 23:20:00+08	2	e0309594
8	Our Campaign has concluded!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-10 23:20:00+08	6	e0309594
9	Our beneficiaries express their gratitude!	Porta convallis. INTEGER magna orci, consequat ac nisl vel, tristique dictum sapien. Nam iaculis sit amet sem a porttitor. Cras vestibulum tempor ligula eu vehicula. Nam sed purus augue. Donec non semper arcu.	2019-07-15 23:20:00+08	6	e0309594
13	Update 1: This is a test	Lorem Ipsum	2019-07-10 16:58:21.825+08	39	e0309594
14	Update 2: This is a second test	Hahaha	2019-07-10 16:58:49.253+08	39	e0309594
15	Update 3: I am testing this update!!	LOLOL	2019-07-12 17:32:18.553+08	39	e0309594
16	Helllooo	This is anothe test!	2019-07-12 18:02:06.059+08	39	e0309594
17	Testinggg	Debugggg	2019-07-12 18:08:10.714+08	39	e0309594
18	Cheeers to all who supported our campaign	WE have achieved our goals and hereby conclude our campaign	2019-07-29 17:19:19.4+08	56	e0309595
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, password, name, following) FROM stdin;
e0322822	123	Phaedra Tan Yee Joo	\N
e1234567	123	Admin Guy	\N
e0309595	123	Chia De Xun	\N
e0309594	123	Thanos	\N
\.


--
-- Name: pnc_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pnc_id_seq', 56, true);


--
-- Name: support_support_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.support_support_id_seq', 32, true);


--
-- Name: updates_update_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.updates_update_id_seq', 18, true);


--
-- Name: pnc pnc_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pnc
    ADD CONSTRAINT pnc_pkey PRIMARY KEY (id);


--
-- Name: support support_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support
    ADD CONSTRAINT support_pkey PRIMARY KEY (support_id);


--
-- Name: updates updates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.updates
    ADD CONSTRAINT updates_pkey PRIMARY KEY (update_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: pnc pnc_organizer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pnc
    ADD CONSTRAINT pnc_organizer_id_fkey FOREIGN KEY (organizer_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: support support_pnc_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support
    ADD CONSTRAINT support_pnc_id_fkey FOREIGN KEY (pnc_id) REFERENCES public.pnc(id) ON DELETE CASCADE;


--
-- Name: support support_poster_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.support
    ADD CONSTRAINT support_poster_id_fkey FOREIGN KEY (poster_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: updates updates_organizer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.updates
    ADD CONSTRAINT updates_organizer_id_fkey FOREIGN KEY (organizer_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: updates updates_pnc_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.updates
    ADD CONSTRAINT updates_pnc_id_fkey FOREIGN KEY (pnc_id) REFERENCES public.pnc(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


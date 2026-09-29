import Visitor from './components/Visitor';
import { useState } from 'react';
import { FaGithub, FaWeixin } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { papers } from './data/profile';
import { news } from './data/news';
import './css/All.css';
import './css/Header.css';
import './css/Hero.css';
import './css/Publications.css';
import './css/Internship.css';

const email = '2024010131@njupt.edu.cn';
const nav = [['about', 'About'], ['news', 'News'], ['publications', 'Publications'], ['internship', 'Internship'], ['education', 'Education'], ['awards', 'Awards']];
function AuthorNames({ text }) {
  return text.split('Xuancheng Xu').map((part, i) => <span key={i}>{i > 0 && <strong>Xuancheng Xu</strong>}{part}</span>);
}
function Header() {
  const [open, setOpen] = useState(false);
  const jump = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); };
  return <header className={`header-wrapper ${open ? 'menu-open' : ''}`}><div className="header-container">
    <a className="header-name" href="#about" onClick={()=>setOpen(false)}><img src="/prism.svg" alt="" style={{width:36,height:"auto",marginRight:12}} /><div className="name-main">Xuancheng Xu<span className="chinese-name">（许轩诚）</span></div></a>
    <button className={`hamburger ${open?'open':''}`} onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="main-nav"><span className="bar bar1"/><span className="bar bar2"/><span className="bar bar3"/></button>
    <nav id="main-nav" className={`header-nav ${open?'show':''}`} aria-label="Main navigation">{nav.map(([id,label])=><button key={id} className="nav-item" onClick={()=>jump(id)}>{label}</button>)}</nav>
  </div></header>;
}
function Hero(){
 const [wechatOpen, setWechatOpen] = useState(false);
 return <div className="hero-grid"><div className="hero-left"><img src="/images/xuancheng-photo.jpg" alt="Xuancheng Xu" className="profile-pic"/><div className="hero-meta">
   <div className="meta-name">Xuancheng Xu<span className="chinese-name">（许轩诚）</span></div><div>Ph.D. Student @ NJUPT</div>
   <div className="meta-description"><div>Generative AI</div><div>Controllable Video Generation</div><div>Video World Models</div></div>
   <div className="meta-link"><a className="meta-linkitem" href="https://scholar.google.com/citations?user=AX3TBb4AAAAJ&hl=zh-CN" target="_blank" rel="noreferrer">Google Scholar</a><a className="meta-linkitem" href={`mailto:${email}`}>Contact</a></div>
   <div className="contact-small"><a href={`mailto:${email}`} className="icon-link" aria-label="Email"><MdEmail/></a><a href="https://github.com/xuxuancheng0208" className="icon-link" aria-label="GitHub"><FaGithub/></a><a href="https://scholar.google.com/citations?user=AX3TBb4AAAAJ&hl=zh-CN" className="icon-link" aria-label="Google Scholar"><FaGoogleScholar/></a><button type="button" className="icon-link wechat-toggle" aria-label="WeChat QR code" title="WeChat" aria-expanded={wechatOpen} aria-controls="wechat-qr" onClick={()=>setWechatOpen(!wechatOpen)}><FaWeixin/></button></div>
   <div className="small-text">Nanjing, China</div><div className="wechat"><div id="wechat-qr" hidden={!wechatOpen}><img src="/images/wechat.jpg" alt="WeChat QR code for _EdisonXu" loading="lazy"/></div></div>
 </div></div></div>;
}
function Publications(){
 const [year,setYear]=useState('');
 const [openAbstract,setOpenAbstract]=useState(null);
 return <div className="publications" id="publications" style={{marginTop:'1rem'}}><div className="publications-select"><div className="card-title">Publications</div><select className="tag-select-filter" value={year} onChange={e=>setYear(e.target.value)} aria-label="Filter publications by year"><option value="">All</option><option>2026</option><option>2025</option></select></div>
 <div className="publications-list">{papers.filter(p=>!year||p.year===year).map(p=>{
 const url=p.links.find(l=>l.label==='Project page')?.url||p.links[0]?.url;
 return <div className="publication-card" id={p.id} key={p.id}><a href={url} className="publication-image-link" target="_blank" rel="noreferrer"><img src={p.image} className="publication-image" alt={p.title} loading="lazy"/></a><div className="publication-content">
 <div className="publication-venue"><span className={`venue-tag ${p.venueType}`}>{p.venue}</span>{p.ccf && <span className={`paper-rank ccf-${p.ccf.toLowerCase()}`}>CCF-{p.ccf}</span>}{p.distinction && <span className="paper-distinction">{p.distinction}</span>}{p.reviewStatus && <span className="paper-review-status">{p.reviewStatus}</span>}</div>
 <div className={`publication-title-wrapper ${openAbstract===p.id ? 'abstract-open' : ''}`} onKeyDown={e=>{if(e.key==='Escape')setOpenAbstract(null);}}><a href={url} className="publication-title" target="_blank" rel="noreferrer">{p.title}</a><div className="abstract-popup" id={`abstract-${p.id}`} role="region" aria-label={`${p.title} abstract`} tabIndex={0}><strong>Abstract</strong><button type="button" className="abstract-close" aria-label="Close abstract" onClick={()=>setOpenAbstract(null)}>×</button><p>{p.abstract}</p></div></div>
 <div className="publication-authors"><AuthorNames text={p.authors}/></div><div className="publication-links">{p.links.map(l=><a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>)}<button className="abstract-toggle" type="button" aria-expanded={openAbstract===p.id} aria-controls={`abstract-${p.id}`} onClick={()=>setOpenAbstract(openAbstract===p.id?null:p.id)}>Abstract</button></div>
 </div></div>;
 })}</div></div>;
}
export default function App(){
 return <div className="App"><Header/><div className="main-layout"><aside className="left-hero"><Hero/></aside><main className="right-content"><div style={{margin:'2rem'}}>
 <div className="about" id="about"><div className="intro-text">
 <p>Hi, I’m <span className="profile-name">Xuancheng Xu</span>, a third-year <strong>Ph.D. student</strong> at <a href="https://www.njupt.edu.cn/">Nanjing University of Posts and Telecommunications</a>. I am advised by <a href="https://www.scholat.com/bkbao.cn">Prof. Bingkun Bao</a> in the <a href="https://mcclab.njupt.edu.cn/main.htm">Multimedia Cognitive Computing Lab</a>.</p>
 <p>My research focuses on <strong>generative AI</strong> and <strong>video diffusion models</strong>, particularly <strong>controllable video generation</strong> and <strong>video world models</strong>. I’m interested in how these models can capture the dynamics of the physical world and respond to user interaction.</p>
 </div></div>
 <div className="News" id="news"><div className="card-title">News</div><ul className="news-list" tabIndex={0} aria-label="News, scroll for more">{news.map(([date,content],i)=><li key={i}><div className="news-time">{date}</div><div className="news-content">{content}</div></li>)}</ul></div>
 <Publications/>
 <div className="card" id="internship" style={{marginTop:'1rem'}}>
 <div className="card-title">Internship</div>
 <div className="timeline-container">
   <div className="timeline-item" id="morphi-internship">
     <div className="timeline-label"><div className="exp-type research">Research</div></div>
     <div className="timeline-content">
       <div className="org-logo-container morphi-logo-container"><img className="org-logo morphi-logo" src="/images/internship/morphi-robot.png" alt="Morphi Robot 墨奇智能 Logo"/></div>
       <div className="exp-container"><div className="timeline-header"><div className="exp-organization"><span className="exp-organization-name">Morphi Robot</span><div className="exp-role">Research Intern, Robot Algorithms</div></div><div className="exp-period">2026.09 – Present</div></div>
       <ul className="exp-details"><li>Post-training of <strong>action-conditioned world models</strong>, with a focus on <strong>reinforcement learning</strong>.</li><li>Leader: <a href="https://taiwang.me/">Tai Wang</a>; Mentor: <a href="https://wutong16.github.io/">Tong Wu</a>.</li></ul></div>
     </div>
   </div>
   <div className="timeline-item" id="giga-internship">
     <div className="timeline-label"><div className="exp-type research">Research</div></div>
     <div className="timeline-content"><div className="org-logo-container"><img className="org-logo" src="/images/internship/giga.png" alt="GigaAI Logo"/></div>
       <div className="exp-container"><div className="timeline-header"><div className="exp-organization"><a className="exp-organization-name" href="https://gigaai.cc/">GigaAI</a><div className="exp-role">Research Intern, Embodied Intelligence</div></div><div className="exp-period">2026.05 – 2026.09</div></div>
       <ul className="exp-details"><li>Core contributor to <strong>GigaWorld-1</strong>, responsible for training the action-conditioned video backbone and enhancing its <strong>multi-view interaction</strong> performance.</li><li>Leader: <a href="https://www.zhengzhu.net/">Zheng Zhu</a>; Mentor: <a href="https://jeffwang987.github.io/">Xiaofeng Wang</a>.</li></ul></div>
     </div>
   </div>
 </div></div>
 <div className="card" id="education" style={{marginTop:'1rem'}}><div className="card-title">Education</div><div className="education-list">{[['Ph.D. (In progress)','2024.09 - 2029.06'],['Bachelor of Communication Engineering','2020.09 - 2024.06']].map(([degree,date])=><div className="education-item" key={degree}><div className="education-header"><h3 className="education-university">Nanjing University of Posts and Telecommunications</h3><div className="education-period">{date}<div className="education-location">Nanjing, China</div></div></div><div className="education-details"><p className="education-degree">{degree}</p></div></div>)}</div></div>
 <div className="card" id="awards" style={{marginTop:'1rem'}}><div className="card-title">Selected Awards</div><div className="awards-list">{[['2025.10','Third-class Academic Scholarship, Nanjing University of Posts and Telecommunications',''],['2024.10','First-class Academic Scholarship, Nanjing University of Posts and Telecommunications',''],['2020.11','ICPC Regional Contest','(Bronze Medal)']].map(([date,text,highlight])=><div className="award-item" key={date}><span className="award-icon">✦ </span><span className="award-text">[{date}] {text} <span className="award-highlight">{highlight}</span></span></div>)}</div></div>

 </div><Visitor/></main></div></div>;
}

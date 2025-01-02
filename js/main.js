// 处理导航栏滚动效果
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}); 

document.addEventListener('DOMContentLoaded', function() {
    // 检查所有作品项
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const img = item.querySelector('img');
        const expandBtn = item.querySelector('.expand-btn');
        
        // 图片加载完成后检查是否需要展开按钮
        img.onload = function() {
            if (img.scrollHeight > img.clientHeight) {
                item.classList.add('has-more');
            }
        }
        
        // 点击展开按钮
        if (expandBtn) {
            expandBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                item.classList.toggle('expanded');
                expandBtn.textContent = item.classList.contains('expanded') ? '收起' : '查看完整图片';
            });
        }
    });
}); 

// 添加作品详情展示功能
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const detailPanel = document.querySelector('.portfolio-detail');
    const closeBtn = document.querySelector('.close-detail');
    const overlay = document.createElement('div');
    overlay.className = 'portfolio-overlay';
    document.body.appendChild(overlay);

    // 点击作品项
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type'); // 需要在HTML中添加data-type属性
            const detailContent = document.querySelector(`.detail-panel[data-for="${type}"]`);
            
            if (detailContent) {
                // 隐藏所有详情面板
                document.querySelectorAll('.detail-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
                
                // 显示对应的详情面板
                detailContent.classList.add('active');
                detailPanel.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });

    // 关闭详情面板
    function closeDetail() {
        detailPanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeDetail);
    overlay.addEventListener('click', closeDetail);
}); 

// 添加滚动触发动画
document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    function checkScroll() {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.85) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // 初始检查
});

// 为作品项添加序号（用于动画延迟）
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.style.setProperty('--item-index', index);
}); 

// 添加移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 点击导航链接后关闭菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
        }
    });

    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加视差滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// 添加触摸支持
document.addEventListener('touchstart', function() {}, true); 
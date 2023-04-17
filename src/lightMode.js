        const btn = document.querySelector('.light-dark');
        const screenSwitch = document.querySelector('.switch-mode');
        const body = document.querySelector("body");
        const searchIcon = document.querySelector(".search-icon");
        const searchQuery = document.querySelector("input");
        const nav = document.querySelector("nav");
        const links = document.querySelectorAll("a");
        // const container = document.querySelectorAll(".container");
        const ovals = document.querySelectorAll(".oval");
        const categories = document.querySelectorAll("i");
        const info = document.querySelectorAll(".about")
        const profile = document.querySelector(".user-avatar");
        const wayOut = document.querySelector(".logoutModal");
        const content = wayOut.querySelector(".content");
        const modalOptions = wayOut.querySelectorAll(".opt");
        const closeModal = wayOut.querySelector(".one");
        profile.addEventListener('click', ()=>{
        wayOut.classList.add("wayout")
            });
        closeModal.addEventListener('click', ()=>{
        wayOut.classList.remove("wayout")
            })
        screenSwitch.addEventListener('click', lightMode);
    
    function lightMode() {
            let theme;
            if(btn.classList.contains('triggered')){
                btn.classList.remove('triggered');
                body.classList.remove('light');
                screenSwitch.classList.remove('light');
                searchIcon.classList.remove('lightmode');
                searchQuery.classList.remove('light');
                searchQuery.classList.remove('lmode');
                nav.classList.remove("light");
                links.forEach(link => link.classList.remove('lightlinks'));
                profile.classList.remove('border');
                content.classList.remove('light-background');
                modalOptions.forEach(option => option.classList.remove("light-background"));
                categories.forEach(category => category.classList.remove('light-colour'));
                ovals.forEach(oval => oval.classList.remove("light-theme"));
                info.forEach(about => about.classList.remove("light-text"));
                theme = 'DARK';
            }else{
                btn.classList.add('triggered');
                body.classList.add('light');
                screenSwitch.classList.add('light');
                searchQuery.classList.add('light');
                searchQuery.classList.add('lmode');
                searchIcon.classList.add('lightmode');
                nav.classList.add('light');
                links.forEach(link => link.classList.add('lightlinks'));
                profile.classList.add('border');
                content.classList.add('light-background');
                modalOptions.forEach(option => option.classList.add("light-background"));
                categories.forEach(category => category.classList.add('light-colour'));
                ovals.forEach(oval => oval.classList.add("light-theme"));
                info.forEach(about => about.classList.add("light-text"));
                theme = 'LIGHT';
            }
            localStorage.setItem("PageTheme", JSON.stringify(theme));
    }
        let getTheme = JSON.parse(localStorage.getItem("PageTheme"));
    console.log(getTheme, "Hello");
    
    if(getTheme === 'LIGHT'){
        btn.classList.add('triggered');
                body.classList.add('light');
                screenSwitch.classList.add('light');
                searchIcon.classList.add('lightmode');
                searchQuery.classList.add('light');
                searchQuery.classList.add('lmode');
                nav.classList.add('light');
                content.classList.add('light-background');
        modalOptions.forEach(option => option.classList.add("light-background"));
                links.forEach(link => link.classList.add('lightlinks'));
                profile.classList.add('border');
                categories.forEach(category => category.classList.add('light-colour'));
                ovals.forEach(oval => oval.classList.add("light-theme"));
                info.forEach(about => about.classList.add("light-text"));
    
    }else if((getTheme === 'DARK')){
        btn.classList.remove('triggered');
                body.classList.remove('light');
                screenSwitch.classList.remove('light');
                searchIcon.classList.remove('lightmode');
                searchQuery.classList.remove('light');
                searchQuery.classList.remove('lmode');
                nav.classList.remove("light");
                content.classList.remove('light-background');
                    modalOptions.forEach(option => option.classList.remove("light-background"));
                links.forEach(link => link.classList.remove('lightlinks'));
                profile.classList.remove('border');
                categories.forEach(category => category.classList.remove('light-colour'));
                ovals.forEach(oval => oval.classList.remove("light-theme"));
                info.forEach(about => about.classList.remove("light-text"));
    }

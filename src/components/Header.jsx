import React from 'react'

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light sticky-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div class="container">
            <a class="navbar-brand" href="index.html">
             {/*<img src="assets/img/gallery/logo-n.png" height="45" alt="logo" /> */}   
                <p>Salesforce Demo Orgs</p>
            </a>
    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                    <li class="nav-item px-2"><a class="nav-link active" aria-current="page" href="index.html">Home</a></li>
                    <li class="nav-item px-2 dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Content
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="/sfdemoorgs.html">Salesforce Demo Orgs</a></li>
                            <li><a class="dropdown-item" href="/sflearningpaths.html">Salesforce Learning Paths</a></li>
                        </ul>
                    </li>
                    <li class="nav-item px-2"><a class="nav-link" href="/tools.html">Tools</a></li>
                    <li class="nav-item px-2"><a class="nav-link" href="/extensions.html">Extensions</a></li>
                    <li class="nav-item px-2"><a class="nav-link" href="/links.html">Links</a></li>
                    <li class="nav-item px-2"><a class="nav-link" href="/resources.html">Resources</a></li>
                    <li class="nav-item px-2"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item px-2"><a class="nav-link" href="#">FeedBack</a></li>
                </ul>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

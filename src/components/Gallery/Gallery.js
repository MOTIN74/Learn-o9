import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <h2>This is our Gallery</h2>
           <div className="gallery">
           <div>
                <img src="https://t3.ftcdn.net/jpg/04/59/26/08/240_F_459260836_R8RI9gHl1YJXfC6L0r0HVo6w6kXCpr7h.jpg" alt="" />
            </div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/04/57/82/81/240_F_457828176_da6EdaaefOxH0xfUD4QfR7OblWy75HMH.jpg" alt="" />
                </div>
            <div>
            <img src="https://t3.ftcdn.net/jpg/04/56/28/60/240_F_456286086_nJJSNLoPXyYqXg7TiJhSqHS1eo2FgO16.jpg" alt="" />
            </div>
            <div>
            <img src="https://t3.ftcdn.net/jpg/04/49/75/46/240_F_449754635_8YG5DVxXshAQ8n94MDoGamPVRbY6Nqzp.jpg" alt="" />
            </div>
            <div>
            <img src="https://media.istockphoto.com/photos/children-reading-picture-id1147656393?b=1&k=20&m=1147656393&s=170667a&w=0&h=sEEkliYW9a0HNdz-NDq4TZAts8YO_A77Lian-MWnrRw=" alt="" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9vayUyMGxpYnJhcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            
            
           </div>
        </div>
    );
};

export default Gallery;
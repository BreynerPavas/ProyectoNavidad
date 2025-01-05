import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.scss'

const Profile = () => {
    
    const userInfo = localStorage.getItem("user");

if (userInfo) {
    const parsedUserInfo = JSON.parse(userInfo);
    console.log(parsedUserInfo); // Esto devuelve el objeto.
    //
    return (
        <>
        
          <section className="" style={{ backgroundColor: 'white' }}>
            <div className="container py-1 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
                    <div className="row g-0">
                      <div
                        className="col-md-4 gradient-custom text-center text-white"
                        style={{
                          borderTopLeftRadius: '.5rem',
                          borderBottomLeftRadius: '.5rem',
                        }}
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="Avatar"
                          className="img-fluid my-5"
                          style={{ width: '80px' }}
                        />
                        <h5>{parsedUserInfo.name}</h5>
                        
                        <i className="far fa-edit mb-5"></i>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-4">
                          <h6>Information</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">{parsedUserInfo.email}</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Role</h6>
                              <p className="text-muted">{parsedUserInfo.role}</p>
                            </div>
                          </div>
                          <h6>More info</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Recent</h6>
                              <p className="text-muted">Lorem ipsum</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Most Viewed</h6>
                              <p className="text-muted">Dolor sit amet</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start">
                            <a href="#!">
                              <i className="fab fa-facebook-f fa-lg me-3"></i>
                            </a>
                            <a href="#!">
                              <i className="fab fa-twitter fa-lg me-3"></i>
                            </a>
                            <a href="#!">
                              <i className="fab fa-instagram fa-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
} else {
    console.log("No se encontró la información en el localStorage.");
    return(
        <>
        <section className="" style={{ backgroundColor: 'white' }}>
  <div className="container py-1 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
          <div className="row g-0">
            <div
              className="col-md-4 gradient-custom text-center text-white"
              style={{
                borderTopLeftRadius: '.5rem',
                borderBottomLeftRadius: '.5rem',
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="Not Found"
                className="img-fluid my-5"
                style={{ width: '80px' }}
              />
              <h5>User Not Found</h5>
              <p>Oops! The user you are looking for does not exist.</p>
              <i className="far fa-frown mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Error Details</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-12 mb-3">
                    <p className="text-muted">
                      We couldn't find the user you were searching for. Please
                      check the details and try again.
                    </p>
                  </div>
                </div>
                <h6>Suggestions</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-12 mb-3">
                    <p className="text-muted">1. Login again.</p>
                    <p className="text-muted">2. Sign in if you dont have an account.</p>
                    <p className="text-muted">3. Contact support if needed.</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
  
};

export default Profile;

import React from 'react';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <section className='projects' id='projects'>
                <div class="project-card-list">
                  <div class="project-card">
                    <div class="project-description">
                      <h2>Goala</h2>
                      <div class="project-card-block">
                        <img src="https://snipboard.io/p7FbvQ.jpg" alt="goala project" />
                        <div class="project-icons">
                          <i class="fab fa-react"></i>
                          <i class="fab fa-node"></i>
                          <i class="fab fa-js-square"></i>
                        </div>
                      </div>
                      <p>A private journal with goal and reminder tracking.</p>
                      <button><a target="_blank" href="https://github.com/CodeChung/goala-client">Code</a></button>
                      <button><a target="_blank" href="https://hc9825-goala-app.now.sh">Demo</a></button>
                    </div>
                  </div>
                  <div class="project-card">
                    <div class="project-description">
                      <h2>FaceJams</h2>
                      <div class="project-card-block">
                        <img src="https://camo.githubusercontent.com/b2e01cc830204379c3bd08b3fbc5688ebf3c59eb/68747470733a2f2f736e6970626f6172642e696f2f587761464b792e6a7067" alt="facejams project" />
                        <div class="project-icons">
                          <i class="fab fa-react"></i>
                          <i class="fab fa-node"></i>
                          <i class="fab fa-js-square"></i>
                        </div>
                      </div>
                      <p>Convert your facial emotions into a Spotify playlist.</p>
                      <button><a target="_blank" href="https://github.com/CodeChung/facejams-client">Code</a></button>
                      <button><a target="_blank" href="https://codechung-facejams-app.now.sh">Demo</a></button>
                    </div>
                  </div>
                </div>
                <div class="project-card-list">
                  <div class="project-card">
                    <div class="project-description">
                      <h2>Egg Quiz</h2>
                      <div class="project-card-block">
                        <img src="images/egg_quiz_compressed.png" alt="egg quiz project" />
                        <div class="project-icons">
                          <i class="fab fa-html5"></i>
                          <i class="fab fa-css3-alt"></i>
                          <i class="fab fa-js-square"></i>
                        </div>
                      </div>
                      <p>An interactive quiz about everyone’s favorite breakfast item.</p>
                      <button><a target="_blank" href="https://github.com/CodeChung/eggquiz">Code</a></button>
                      <button><a target="_blank" href="https://codechung.github.io/eggquiz/">Demo</a></button>
                    </div>
                  </div>
                  <div class="project-card">
                    <div class="project-description">
                      <h2>Fridge Friend</h2> 
                      <div class="project-card-block">
                        <img src="https://raw.githubusercontent.com/CodeChung/fridgefriend/master/src/img/fridge.png" alt="fridgefriend project" />
                        <div class="project-icons">
                          <i class="fab fa-html5"></i>
                          <i class="fab fa-css3-alt"></i>
                          <i class="fab fa-js-square"></i>
                        </div>
                      </div>
                      <p>Get recipes from foods in fridge.</p>
                      <button><a target="_blank" href="https://github.com/CodeChung/fridgefriend">Code</a></button>
                      <button><a target="_blank" href="https://codechung.github.io/fridgefriend/">Demo</a></button>
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Projects;
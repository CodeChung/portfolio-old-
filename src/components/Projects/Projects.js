import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Projects.css';
import ProjectNav from './ProjectNav/ProjectNav';
import ProjectCard from './ProjectCard/ProjectCard';
import { DiReact, DiNodejs, DiHtml5, DiCss3, DiPostgresql, DiJqueryLogo, } from "react-icons/di";
import goala from './img/goala.png';
import facejams from './img/facejams.png';
import egg_quiz from './img/egg_quiz.png';
import fridge from './img/fridge.png';

class Projects extends React.Component {
  state = {
    currentView: 'goala'
  }
  setView = currentView => {
    this.setState({ currentView })
  }
  render() {
    const { currentView } = this.state
    return (
      <section className='projects' id='projects'>
        <ProjectNav setView={this.setView} view={currentView} />
        <Switch>
          <Route 
            exact path='/projects/' 
            render={() => 
              <ProjectCard 
                setView={this.setView}
                demoLink='https://hc9825-goala-app.now.sh'
                codeLink='https://github.com/CodeChung/goala-client'
                icons={[<DiReact key={0} />, <DiNodejs key={1}/>, <DiPostgresql key={2}/>, <DiHtml5 key={3}/>, <DiCss3 key={4}/>]}
                image={goala}
                title='Goala'
                description='A private journal with goal and reminder tracking.'
              />
            }
          />
          <Route 
            path='/projects/goala' 
            render={() => 
              <ProjectCard 
                setView={this.setView}
                demoLink='https://hc9825-goala-app.now.sh'
                codeLink='https://github.com/CodeChung/goala-client'
                icons={[<DiReact key={0} />, <DiNodejs key={1}/>, <DiPostgresql key={2}/>, <DiHtml5 key={3}/>, <DiCss3 key={4}/>]}
                image={goala}
                title='Goala'
                description='A private journal with goal and reminder tracking.'
              />
            }
          />
          <Route 
            path='/projects/facejams' 
            render={() => 
              <ProjectCard 
                setView={this.setView}
                demoLink='https://codechung-facejams-app.now.sh'
                codeLink='https://github.com/CodeChung/facejams-client'
                icons={[<DiReact key={0} />, <DiNodejs key={1}/>, <DiPostgresql key={2}/>, <DiHtml5 key={3}/>, <DiCss3 key={4}/>]}
                image={facejams}
                title='Facejams'
                description='Convert your facial emotions into a Spotify playlist.'
              />
            }
          />
          <Route 
            path='/projects/fridge_friend' 
            render={() => 
              <ProjectCard 
                setView={this.setView}
                demoLink='https://codechung.github.io/fridgefriend/'
                codeLink='https://github.com/CodeChung/fridgefriend'
                icons={[<DiJqueryLogo key={0}/>, <DiHtml5 key={1}/>, <DiCss3 key={2}/>]}
                image={fridge}
                title='Fridge Friend'
                description='Get recipes from foods in fridge.'
              />
            }
          />
          <Route 
            path='/projects/egg_quiz' 
            render={() => 
              <ProjectCard 
                setView={this.setView}
                demoLink='https://codechung.github.io/eggquiz/'
                codeLink='https://github.com/CodeChung/eggquiz'
                icons={[<DiJqueryLogo key={0}/>, <DiHtml5 key={1}/>, <DiCss3 key={2}/>]}
                image={egg_quiz}
                title='Egg Quiz'
                description='An interactive quiz about everyone’s favorite breakfast item.'
              />
            }
          />
        </Switch>
      </section>
    )
  }
}

export default Projects;
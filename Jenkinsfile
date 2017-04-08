pipeline {
  agent any
  stages {
    stage('Browserstack') {
      steps {
        parallel(
          "Browserstack": {
            echo 'Hello Dude!'
            
          },
          "Chrome": {
            sleep 2
            
          }
        )
      }
    }
    stage('Moo') {
      steps {
        sh 'pwd'
        mail(subject: 'Test from Jenkis', body: 'Jo', from: 'vergissberlin@gmail.com', replyTo: 'vergissberlin@gmail.com', to: 'vergissberlin@gmail.com')
      }
    }
  }
  environment {
    DIRK = 'sven'
  }
}
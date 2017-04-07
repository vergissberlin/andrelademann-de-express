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
      }
    }
  }
  environment {
    DIRK = 'sven'
  }
}
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
  }
  environment {
    DIRK = 'sven'
  }
}
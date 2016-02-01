name := """backend"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

// Add MongoDB Java Driver
libraryDependencies += "org.mongodb" % "mongo-java-driver" % "3.2.0"

// Add Morphia ODM
libraryDependencies += "org.mongodb.morphia" % "morphia" % "1.0.1"

libraryDependencies += "junit" % "junit" % "4.12" % Test


// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

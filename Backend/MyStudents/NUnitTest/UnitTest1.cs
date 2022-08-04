using MyStudents.Controllers;
using MyStudents.Models;

namespace NUnitTest;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        var controller = new StudentController(new TestStudentAppContext());
        var students =  controller.GetStudents();
        Assert.IsNotNull(students);
        Assert.Pass();
    }
    
    [Test]
    public void Test2()
    {
        Student student = new Student();
        student.age = 10;
        student.FirstName = "helloWorld";
        Assert.AreEqual("helloWorld", student.FirstName);
        Assert.AreEqual(10, student.age);

    }

}
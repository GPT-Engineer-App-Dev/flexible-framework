import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome to Your Application</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
            <div className="flex space-x-2">
              <Input placeholder="Enter something..." className="flex-grow" />
              <Button>Submit</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Card {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is the content for card {item}. You can replace this with your own content.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
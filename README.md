
# Instructions to Run the Project Locally :-
## Prerequisites
-Node.js (version 16 or later) should be installed on your machine.

-npm (comes with Node.js) or Yarn to manage dependencies.

## Steps to Run the Project :
1. Clone the repository:
  -git clone https://github.com/your-repo/user-management-table.git
  -cd user-management-table
2. Install dependencies: Using npm:
   -npm install
3. Set up the API
4. Start the development server: Using npm:
  -npm run dev
5.Open the application: Open your browser and go to http://localhost:3000 to view the app.

## Approach & Features
This project is built with Next.js and leverages the TanStack Table for dynamic table rendering, pagination, sorting, and filtering functionalities.

1. Data Fetching
The data is fetched using TanStack Query, which provides efficient data fetching and caching.
API Call (fetchUsers) is used to get a list of users, and the data is paginated to show 5 users per page.
2. Pagination
The table supports pagination, displaying 5 users per page.
The useRouter hook is used for dynamic routing. The page number is passed as a parameter in the URL (e.g., /users/1).
Pagination controls allow navigating between pages, while the query updates accordingly.
3. Sorting
Users can click on column headers (e.g., Name, Email) to sort the table in ascending or descending order.
TanStack Table's useSortBy hook handles the sorting mechanism, allowing dynamic sorting based on columns.
4. Filtering
Filters are implemented for the Name and Email columns. Users can type text into the filter inputs, which will narrow down the rows based on the column's data.
The filtering is case-insensitive and updates dynamically.

## Challenges Faced
Pagination with Dynamic Routing:

Initially, the pagination setup was tricky because the page parameter is passed via dynamic routes ([page]). Handling this correctly with useRouter required careful attention to manage the state and update the page number.
Additionally, ensuring the data is correctly sliced and displayed based on the current page posed a challenge, especially with asynchronous fetching.
Sorting and Filtering:

Sorting and filtering with TanStack Table was straightforward with hooks like useSortBy and useFilters, but managing them simultaneously with pagination was tricky.
Ensuring that filters don't interfere with pagination and that the table correctly updates based on both filter and page number was a key challenge.
The sorting mechanism had to be connected with the filters, so that when a user applies a filter, it correctly interacts with the sorting state.
State Management:

Keeping track of multiple states (pagination, sorting, and filtering) required efficient state management. Using TanStack Table with React's built-in state management provided a good solution, but careful coordination was necessary to ensure state updates happened in the correct order.
Error Handling:

Proper error handling for failed API requests was essential to ensure the app doesn't crash when the user data cannot be fetched.
Responsive Design:

Making the table responsive for smaller screen sizes and mobile devices was challenging, as tables tend to overflow. Using CSS techniques like flexbox and media queries was needed to ensure proper layout across devices.

import teamData from "./data";

export async function GET() {
    return new Response(JSON.stringify(teamData, null, 2));
}